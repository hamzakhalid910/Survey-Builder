// SurveyDashboard.jsx
import React from 'react';

import LeftMenu from '../../Components/SurveyDashboard/LeftMenu';
import RightMenu from '../../Components/SurveyDashboard/RightMenu';
import MiddleBar from '../../Components/SurveyDashboard/MiddleBar';
import Header from '../../Components/Common/Header';
import DnDContext from '../../Context/DnDContext';
import MainContainer from '../../Components/SurveyDashboard/DropContainer';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function SurveyDashboard() {
  return (
    <div >
      <DndProvider backend={HTML5Backend}>
      <Header/>
      
      <RightMenu />
      <MiddleBar />
      <MainContainer/>
      
      </DndProvider>
    </div>
  );
}

export default SurveyDashboard;
