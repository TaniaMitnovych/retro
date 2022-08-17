import React from 'react';
import './ProjectCard.css';
import clip from '../../images/clip.png';
import note from '../../images/note.png';
import photo from '../../images/photo.png';
import sound from '../../images/sound.png';
import tv from '../../images/tv_small.png';
const ProjectCard = (props) => {
  const icons = [clip, note, photo, sound, tv];
  const getRandomInt = () => {
    return Math.floor(Math.random() * icons.length);
  }
  return (
    <div className='project-card'>
      <img src={props.image} alt='' className='project-card__image' />
      <span className='project-card__icon-circle'>
        <img src={icons[getRandomInt()]} className='project-card__icon' />
      </span>
      <h6 className='project-card__name'>{props.name}</h6>
      <div className='project-card__info'>
        <p>Name: {props.name}</p>
        <p>Release date: {props.date}</p>
        <p>Technologies: {props.technologies}</p>
        <p>Cost: {props.cost}</p>
      </div>
    </div>
  );
};

export default ProjectCard;