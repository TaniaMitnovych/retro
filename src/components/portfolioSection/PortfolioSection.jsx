import React, { useState, useEffect } from 'react';
import SectionHeader from '../sectionHeader/SectionHeader';
import axios from 'axios';
import ProjectsContainer from './ProjectsContainer';
import './PortfolioSection.css';
const PortfolioSection = (props) => {

  return (
    <section className={`portfolio-section portfolio-section-${props.theme}`} id='portfolio'>
      <div className='container'>
        <hr className='portfolio-section__line_dashed-top dashed-line' />

        <SectionHeader
          color='dark'
          header="Portfolio"
          subheader="Simplicity is the ultimate sophistication"
          theme={props.theme}
        />
        <ProjectsContainer />

        <hr className='portfolio-section__line_dashed-bottom dashed-line' />

      </div>
    </section>
  );
};

export default PortfolioSection;