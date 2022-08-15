import React, { useState } from 'react';
import cat1 from '../../cats/cat1.jfif';
import cat2 from '../../cats/cat2.jfif';
import cat3 from '../../cats/cat3.jfif';
import cat4 from '../../cats/cat4.jfif';
import cat5 from '../../cats/cat5.jfif';
import './Slider.css';
import arrowLeft from '../../images/Left arrow.png';
import arrowRight from '../../images/Right arrow.png';

const Slider = (props) => {
  const photos = [cat1, cat2, cat3, cat4, cat5];
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleClickLeft = () => {
    console.log(photoIndex)
    if (photoIndex > 0) {
      console.log("l");
      setPhotoIndex(photoIndex - 1);
    }
  }
  const handleClickRight = () => {
    console.log(props.photos.length);
    console.log(photoIndex)
    if (photoIndex < props.photos.length - 1) {
      console.log("r");
      setPhotoIndex(photoIndex + 1);

    }
  }
  return (
    <div className='slider'>
      <button
        type='button'
        className='slider__button slider__button_left'
        onClick={handleClickLeft}>
          <img src={arrowLeft}/>
        </button>
      <img alt='photo' className='slider__photo' src={photos[photoIndex]} />
      <button
        type='button'
        className='slider__button slider__button_right'
        onClick={handleClickRight}>
          <img src={arrowRight}/>
        </button>
      <p className='slider__photo-title'>{props.photos[photoIndex].title}</p>
    </div>
  );
};

export default Slider;