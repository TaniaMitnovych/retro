import React from 'react';
import './AboutCard.css';
const AboutCard = (props) => {
  return (
    <div className={`about-card about-card_${props.theme}`}>
      {props.children}
      <h4 className='about-card__title'>{props.title}</h4>
      <h5 className='about-card__subtitle'>{props.subtitle}</h5>
      <hr className='about-card__line'/>
      {props.text}
    </div>
  );
};

export default AboutCard;