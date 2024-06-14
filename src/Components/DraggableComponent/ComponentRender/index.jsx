import React from 'react';
import SmallComponent from '../SmallComponent/index';
import './style.scss'

const ComponentRender = () => {
  const componentsData = [
    { name: 'Descriptive Text' },
    { name: 'Radio Button' },
    { name: 'Text Box' },
    { name: 'Drop Down' },
    { name: 'Check Box' },
    { name: 'Demographic' },
    { name: 'Rating Scale' },
    { name: 'Star Rating' },
    { name: 'Yes/No' },
    { name: 'Like/Dislike' },
    { name: 'Statement' },
    { name: 'Check Box Grid' },
    { name: 'Multiple Text Box' },
    { name: 'Radio Grid' },
    { name: 'Rating Scale Grid' },
    { name: 'Multiple Drop Down' },
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
