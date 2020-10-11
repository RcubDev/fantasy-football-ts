import React from 'react';
import logo from './logo.svg';
import allWeekData from './Data/WeeklyScoringData';
import ApplicationRouter from './ApplicationRouter';

function App() {
  if(allWeekData && allWeekData.Weeks){
    console.log(allWeekData.Weeks[0].Data.WeekNum);
  };

  return (
    <ApplicationRouter></ApplicationRouter>
  );
}

export default App;
