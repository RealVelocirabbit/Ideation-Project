import React, {useState, useEffect} from 'react';
import PopupForm from '../components/PopupForm.jsx';
import { jwtDecode } from "jwt-decode";


const HeaderContainer = () => {

  const [user, setUser] = useState({})

  // const userObj = {}

  function handleCallbackResponse(response) {
    console.log("jwt token", response.credential);
    const userObj = jwtDecode(response.credential)
    console.log(userObj)
    setUser(userObj)
    document.getElementById("signIn").hidden = true
  }

  //if sign out was clicked
  function handleSignout (event) {
    console.log(event);
    setUser({})
    // userObj = {}
    document.getElementById("signIn").hidden = false
  }
  
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "649988713967-3mlg5u6ekcdtd3kg4gg3o04ihk1ra31j.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signIn"), {
      theme: "outline",
      size: "large",
    });
  });

  return (
    <div className='headerContainer'>
      <div></div>
      <h1 id='header'>Job Application Tracker</h1>
      <PopupForm />
      <div>
      <div id="signIn"></div>
      {user && 
      <div id="profile">
        <img id="picture" src={user.picture}></img>
        <p id="name" >{user.given_name}</p>
        </div>}
      {Object.keys(user).length !== 0 &&
      <button id="signOut" onClick={(e) => handleSignout(e)}>This is Signout</button>}
      </div>
    </div>
  );
};

export default HeaderContainer;
