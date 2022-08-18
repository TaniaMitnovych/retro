import React from 'react';

const PostCard = (props) => {
  return (
    <div className={`post-card post-card_${props.theme}`}>
      <img src={props.image} alt='' className='post-card__image' />
      <div className='post-card__content'>
        <h4 className='post-card__title'>{props.title}</h4>
        <p className='post-card__responses'>
          <a href='#'>
            {props.responses === 0 ? 'no responses' : (props.responses === 1 ? '1 response' : (props.responses + 'responses'))}
          </a>
        </p>
        <p className='post-card__info'>{props.info}</p>
        <p className='post-card__text'>{props.text}</p>
        <span className='post-card__show-more'><a href='#'>(More...)</a></span>
      </div>
    </div>
  );
};

export default PostCard;