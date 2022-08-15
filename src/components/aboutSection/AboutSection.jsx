import React from 'react';
import separator from '../../images/Separator.png';
import AboutCard from './AboutCard';
import tvIcon from '../../images/tv.png';
import tshirtIcon from '../../images/t-shirt.png';
import vinylIcon from '../../images/vinyl.png';
import foodIcon from '../../images/food.png';
import AboutIcon from '../icons/AboutIcon';
import AboutInfo from './AboutInfo';
import './AboutSection.css';
import SectionHeader from '../sectionHeader/SectionHeader';
const AboutSection = (props) => {
  return (
    <section className='about-section'>
      <div className='container'>
        <hr className='about-section__line_dashed-top dashed-line' />
        <SectionHeader 
        theme={props.theme} 
        header='About me' 
        subheader='I am frontend developer from Lviv'/>
        <AboutInfo theme={props.theme}/>
        <hr className='about-section__line_dashed-bottom dashed-line' />
      </div>
    </section>
  );
};

export default AboutSection;