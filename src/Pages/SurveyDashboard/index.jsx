// SurveyDashboard.jsx
import React from 'react';

import LeftMenu from '../../Components/SurveyDashboard/LeftMenu';
import RightMenu from '../../Components/SurveyDashboard/RightMenu';
import MiddleBar from '../../Components/SurveyDashboard/MiddleBar';
import Header from '../../Components/Common/Header';


function SurveyDashboard() {
  return (
    <div >
      <Header/>
      <LeftMenu />
      <RightMenu />
      <MiddleBar />
    </div>
  );
}

export default SurveyDashboard;
