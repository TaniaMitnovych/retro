import React from 'react';
import './SectionHeader.css';
import separator_dark from '../../images/Separator.png';
import separator_light from '../../images/Separator_light.png';
const SectionHeader = (props) => {
  return (
    <div className={`section-header section-header_${props.theme}`}>
      <h2 className='section-header__header'>{props.header}</h2>
      <img src={props.color==='dark'?separator_dark:separator_light} alt='' className='section-header__separator' />
      <h3 className='section-header__subheader'>{props.subheader}</h3>
    </div>
  );
};

export default SectionHeader;