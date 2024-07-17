import React from 'react';
import SmallComponent from '../SmallComponent/index';
import './style.scss';

const ComponentRender = () => {
  const componentsData = [
    { name: 'Radio Button' },
    { name: 'Text Box' },
    { name: 'Drop Down' },
    { name: 'Check Box' },
    { name: 'Multiple Choice' },
  ];

  return (
    <div className='hey'>
      {componentsData.map((data, index) => (
        <SmallComponent key={index} name={data.name} />
      ))}
    </div>
  );
};

export default ComponentRender;
