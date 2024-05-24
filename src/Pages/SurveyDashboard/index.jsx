// SurveyDashboard.jsx
import React from 'react';

import LeftMenu from '../../Components/SurveyDashboard/LeftMenu';
import RightMenu from '../../Components/SurveyDashboard/RightMenu';
import MiddleBar from '../../Components/SurveyDashboard/MiddleBar';
import Header from '../../Components/Header';


function SurveyDashboard() {
  return (
    <div claas>
      <Header/>
      <LeftMenu />
      <RightMenu />
      <MiddleBar />
    </div>
  );
}

export default SurveyDashboard;
