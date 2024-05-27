import React from 'react'
import DropDownSVG from './DropDownSVG'
import HelloThereSVG from './HelloThereSVG';
import DashboardLogoSVG from './DashboardLogoSVG'
import NotificationSVG from './NotificationsSVG';
import QuickTemplateSVG from './QuickTemplateSVG';
import SignInSVG from './SignInSVG';
import SignUpSVG from './SignUpSVG';
import StartFromScratch from './StartFromScratch';
import SurveyBuilderSVG from './SurveyBuilderSVG';


const SvgRenderer = ({type, color }) => {
    const svgs ={
        
        dropDown : <DropDownSVG color={color || "#3498DB"}/> ,
        DasboardLogo: <DashboardLogoSVG color={color || "#3498DB"}/>,
        Notification: <NotificationSVG color={color || "none"}/>,
        
    }

  return svgs[type];
}

export default SvgRenderer