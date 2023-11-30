import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeaderContainer from './HeaderContainer.jsx';
import JobContainer from './JobContainer.jsx';
import { syncData } from '../reducers/noteReducer.js';

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/api/job-card/data')
      .then((response) => response.json())
      .then((data) => {
        console.log('this is the data I need: ', data);
        dispatch(syncData(data));
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className='mainContainer'>
      <HeaderContainer />
      <JobContainer />
    </div>
  );
};

export default MainContainer;
