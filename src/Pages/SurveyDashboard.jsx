import React from 'react';
import Header from '../Components/Header';
import DashboardLeftBar from '../Components/DashboardLeftBar';
import DashboardRightBar from '../Components/DashboardRightBar';

function SurveyDashboard() {
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col items-center">
        {/* Static header */}
        <Header></Header>

        {/* Menu bar */}
        <DashboardLeftBar/>
        <div className="w-[66%] flex flex-col bg-[#F7F7F6]">
            {/* New div between the menus */}
            <div className=" h-16 ">
                <div className='w-full flex flex-row mt-4 ml-4'>
                    <div className='border-[1px] border-black '>
                    <h1 className='text-[#333333] font-medium font-Lato '>Employee Engagement</h1>
                    </div>
                    

                    <div className='border-[1px] border-black w-[15%] ml-[50%]'>
                        <p>Setting</p>

                    </div>
                    </div>
            
            </div>
          </div>
        <DashboardRightBar/>
        </div>
    </>
  );
}

export default SurveyDashboard;
