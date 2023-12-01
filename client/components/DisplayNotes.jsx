import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post.jsx";
import { useDrop } from 'react-dnd';

const DisplayNotes = ({ status }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'post',
    drop: (item) => changeStatus(item.id),
    collect: (montior) => ({
      isOver: !!montior.isOver(),
    }),
  }));
  const changeStatus = (id) => {
    fetch(`/api/job-card/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ",data);
      })
      .catch((err) => {
        console.log(err);
      });

    location.reload();
  };

  //watching all the arrays in state.notes separately
  const data = useSelector((state) => {
    // console.log('display notes state', state)
    return state.notes[status];
  });

  
  const postArray = [];
  data.forEach((ele) => {
    postArray.push(
      <Post
        key={ele._id}
        _id={ele._id}
        company={ele.company}
        title={ele.title}
        salary={ele.salary}
        status={ele.status}
        link={ele.link}
      />
    );
  });
  return (
    <div className='statusColumn' ref={drop}>
      <label id='status'>{status}</label>
      <div className='postContainer'>{postArray}</div>
    </div>
  );
};

export default DisplayNotes;
