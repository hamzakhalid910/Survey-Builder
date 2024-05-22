import React from 'react';

function DashboardLeftBar() {
  return (
    <>
      <div
        className="h-screen w-[17%] bg-[#F7F7F6] border-[1px]  border-[#C7DEFF80]  fixed left-0 top-[9.8%] shadow-md shadow-[#0000000D]" // Adjust top value to match header height
      >
        <h1 className='font-medium text-[#333333] mt-7 ml-3'>Survey Presenting</h1>
        <p className='text-xs text-center mt-16 text-[#828282]'>You don't have any data yet.</p>
      </div>
     
    </>
  );
}

export default DashboardLeftBar;
