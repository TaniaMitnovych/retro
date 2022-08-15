import React from 'react';
import ribbon from '../../images/ribbon.svg';
import './Ribbon.css';


const Ribbon = (props) => {
  return (
    <div className='ribbon'>
      {/* <img src={ribbon} alt='' className='ribbon__image'/> */}
      <div className='ribbon__text'>Old style portfolio</div>
    </div>
  );
};

export default Ribbon;