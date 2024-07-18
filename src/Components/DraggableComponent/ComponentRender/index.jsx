import PropTypes from 'prop-types'; // Import PropTypes
import SmallComponent from '../SmallComponent/index';
import './style.scss';

const ComponentRender = ({ searchTerm }) => {
  const componentsData = [
    { name: 'Radio Button' },
    { name: 'Drop Down' },
    { name: 'Email' },
    { name: 'Check Box' },
    { name: 'Multiple Choice' },
  ];

  const filteredComponents = componentsData.filter(component =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='hey'>
      
      {filteredComponents.map((data, index) => (
        
        <SmallComponent key={index} name={data.name} />
      ))}
    </div>
  );
};

ComponentRender.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default ComponentRender;
