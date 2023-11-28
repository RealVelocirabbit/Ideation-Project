import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post.jsx";

const DisplayNotes = ({ status }) => {
  //watching all the arrays in state.notes separately
  const data = useSelector((state) => {
    return state.notes[status];
  });
  const postArray = [];
  data.forEach((ele) => {
    console.log("element ", ele);
    console.log("element _id ", ele._id);
    postArray.push(
      <Post
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
    <div className="statusColumn">
      <label id="status">{status}</label>
      <div className="postContainer">{postArray}</div>
    </div>
  );
};

export default DisplayNotes;
