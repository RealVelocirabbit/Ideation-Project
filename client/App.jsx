import React, { useEffect, useState } from "react";
import MainContainer from "./containers/MainContainer.jsx";
// import { jwtDecode } from "jwt-decode";
// client_id: 649988713967-3mlg5u6ekcdtd3kg4gg3o04ihk1ra31j.apps.googleusercontent.com
// secret: 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
const App = () => {

  // const [user, setUser] = useState({})


  // function handleCallbackResponse(response) {
  //   console.log("jwt token", response.credential);
  //   const userObj = jwtDecode(response.credential)
  //   console.log(userObj)
  //   setUser(userObj)
  //   document.getElementById("signIn").hidden = true
  // }

  //if sign out was clicked
  // function handleSignout (event) {
  //   console.log(event);
  //   setUser({})
  //   document.getElementById("signIn").hidden = false
  // }
  
  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id:
  //       "649988713967-3mlg5u6ekcdtd3kg4gg3o04ihk1ra31j.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });
  //   google.accounts.id.renderButton(document.getElementById("signIn"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // });

  return (
    <div>
      <MainContainer />
      {/* <div id="signIn"></div>
      {user && 
      <div id="profile">
        <img id="picture" src={user.picture}></img>
        <p id="name" >{user.given_name}</p>
        </div>}
      {Object.keys(user).length !== 0 &&
      <button id="signOut" onClick={(e) => handleSignout(e)}>This is Signout</button>}
    </div> */}
    </div>
  );
};

export default App;
