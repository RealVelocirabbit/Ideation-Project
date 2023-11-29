import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePost } from "../reducers/noteReducer.js";
import { useDrag } from "react-dnd";

const Post = ({ company, title, salary, status, link, _id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "post",
    item: { id: _id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const dispatch = useDispatch();
  let colorArray = [
    "lightblue",
    "lightsalmon",
    "lightgreen",
    "lightpink",
    "yellow",
  ];
  let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

  const helper = () => {
    console.log(_id);
    dispatch(deletePost({ _id: _id, status: status }));
    fetch(`/${_id}`, { method: "DELETE" }).then((data) => console.log(data));
  };

  return (
    <div className="postBox" 
    style={{ backgroundColor: `${randomColor}` }} 
    ref={drag}>
      <Button className="postBoxBtn" onClick={() => helper()}>
        X
        </Button>
      <p>
        <b>Company: </b>
        {company}
      </p>
      <p>
        <b>Job Title: </b>
        {title}
      </p>
      <p>
        <b>Salary: </b>
        {salary}
      </p>
      <p>
        <b>Status: </b>
        {status}
      </p>
      <p>
        <b>Job Link: </b>
        <a href={"https://" + link}>Click on Link</a>
      </p>
    </div>
  );
};

export default Post;
