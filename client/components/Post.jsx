import React, { useEffect,useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePost } from "../reducers/noteReducer.js";
import { useDrag } from "react-dnd";
import Modal from "react-bootstrap/Modal";

const Post = ({ company, title, salary, status, link, _id }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  function handleDelete(){
    dispatch(deletePost({ _id: _id, status: status }));
    fetch(`/api/job-card/${_id}`, { method: "DELETE" }).then((data) => console.log(data));
      handleClose();
      location.reload();
   }
  // const helper = () => {
  //   console.log(_id);
  //   dispatch(deletePost({ _id: _id, status: status }));
  //   fetch(`/api/job-card/${_id}`, { method: "DELETE" }).then((data) => console.log(data));
  // };

  return (
    <div>
      <button className="postBox" onClick={handleShow}
    style={{ backgroundColor: `${randomColor}` }} 
    ref={drag}>
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
    </button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {/* popup title bar */}
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="formInput"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {/* form elements below  */}
            <label>
             What are you trying to do huh?
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button style={{ backgroundColor: "rgb(66,103,178)"}} variant="primary" onClick={handleClose}>
            Edit
          </Button>
          {/* when they click track button - send to database  */}
          <Button style={{ backgroundColor: "rgb(220, 53, 69)" }} variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  );
};

export default Post;
