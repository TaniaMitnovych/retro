import React from 'react';
import './AboutIcon.css';
const AboutIcon = (props) => {
  return (
    <div className='about-icon'>
      <div className='about-icon__circle'>
        <img className='about-icon__image' src={props.image}/>  
      </div>
    </div>
  );
};

export default AboutIcon;