import React from 'react';
import Ribbon from '../ribbon/Ribbon';
import Slider from '../slider/Slider';
import './SliderSection.css';
import retroBanner from '../../images/RETRO banner.png';



const SliderSection = (props) => {
  const photos = [
    { title: 'cat1', image: '../../cats/cat1.jfif' },
    { title: 'cat2', image: '' },
    { title: 'cat3', image: '' },
    { title: 'cat4', image: '' },
    { title: 'cat5', image: '' }
  ]
  return (
    <section className={`slider-section slider-section-${props.theme}`}>
      <div className='container'>
        <hr className='slider-section__line_dashed-top dashed-line' />
        <img src={retroBanner} alt='retro' className='slider-section__banner' />
        <Ribbon />
        <Slider photos={photos} />
        <h2 className='slider-section__text-hello'>"Hello, I am Tetiana Mitnovych"</h2>
        <h3 className='slider-section__text-welcome'>Welcome to retro, my wonderful theme!"</h3>
        <hr className='slider-section__line_dashed-bottom dashed-line' />
      </div>
    </section>
  );
};

export default SliderSection;