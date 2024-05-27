import React from 'react'
import DropDownSVG from './DropDownSVG'
import DashboardLogoSVG from './DashboardLogoSVG'
import NotificationSVG from './NotificationsSVG';

const SvgRenderer = ({type, color }) => {
    const svgs ={
        
        dropDown : <DropDownSVG color={color || "#3498DB"}/> ,
        DasboardLogo: <DashboardLogoSVG color={color || "#3498DB"}/>,
        Notification: <NotificationSVG color={color || "none"}/>,
        
    }

  return svgs[type];
}

export default SvgRenderer