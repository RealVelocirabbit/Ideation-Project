import React, { useEffect } from 'react';
import HeaderContainer from './HeaderContainer.jsx';
import JobContainer from './JobContainer.jsx';
import { syncData } from '../reducers/noteReducer.js';
import { useDispatch, useSelector } from 'react-redux';
const MainContainer = () => {
  const dispatch = useDispatch();
  
  const user = useSelector((state) => {
    return state.users.user
  })
  console.log('user in main container', user)
  
  //this is deprecated, update with something else
  if (user.jti) {
    fetch(`/api/job-card/data?id=${user.jti}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('this is the data I need: ', data);
        dispatch(syncData(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='mainContainer'>
      <HeaderContainer />
      <JobContainer />
    </div>
  );
};

export default MainContainer;
