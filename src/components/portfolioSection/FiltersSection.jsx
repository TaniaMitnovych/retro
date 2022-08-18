import React, {useState}from 'react';
import './FiltersSection.css';
const FiltersSection = (props) => {
  return (
    <div className='filters-section'>
      <span className='filters-section__text'>Filter by</span>
      <ul className='filters-section__technologies-list'>
      {
        props.children
      }
      </ul>
    </div>
  );
};

export default FiltersSection;