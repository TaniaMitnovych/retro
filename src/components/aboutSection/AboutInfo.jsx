import React from 'react';
import AboutCard from './AboutCard';
import AboutIcon from '../icons/AboutIcon';
import tvIcon from '../../images/tv.png';
import tshirtIcon from '../../images/t-shirt.png';
import vinylIcon from '../../images/vinyl.png';
import foodIcon from '../../images/food.png';
import './AboutInfo.css';
import MoviesText from '../styledText/MoviesText';
import MusicText from '../styledText/MusicText';
import ClothesText from '../styledText/ClothesText';
import FoodText from '../styledText/FoodText';
const AboutInfo = (props) => {
  return (
    <div className='about-info'>
      <AboutCard
        title='Movies'
        subtitle="What I watch"
        text={<MoviesText/>}
        theme={props.theme}
      >
        <AboutIcon image={tvIcon} />
      </AboutCard>
      <AboutCard
        title='Music'
        subtitle="What I listen"
        text={<MusicText/>}
        theme={props.theme}
      >
        <AboutIcon image={vinylIcon} />
      </AboutCard>
      <AboutCard
        title='Clothes'
        subtitle="What I wear"
        text={<ClothesText/>}
        theme={props.theme}
      >
        <AboutIcon image={tshirtIcon} />
      </AboutCard>
      <AboutCard
        title='Food'
        subtitle="What I eat"
        text={<FoodText/>}
        theme={props.theme}
      >
        <AboutIcon image={foodIcon} />
      </AboutCard>
    </div >
  );
};

export default AboutInfo;