// SurveyDashboard.jsx
import React from 'react';

import LeftMenu from '../../Components/SurveyDashboard/LeftMenu';
import RightMenu from '../../Components/SurveyDashboard/RightMenu';
import MiddleBar from '../../Components/SurveyDashboard/MiddleBar';
import Header from '../../Components/Common/Header';
import DnDContext from '../../Context/DnDContext';


function SurveyDashboard() {
  return (
    <div >
      <DnDContext>
      <Header/>
      <LeftMenu />
      <RightMenu />
      <MiddleBar />
      </DnDContext>
      
    </div>
  );
}

export default SurveyDashboard;
