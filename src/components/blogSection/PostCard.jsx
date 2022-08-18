import React, { useState, useEffect, useMemo, useRef } from 'react';
import './PostCard.css';
const PostCard = (props) => {
  const postRef = useRef(null);
  const isInViewport = useIsInViewport(postRef);
  useEffect(() => {
    if(isInViewport){
      showPost();
    }else{
      postRef.current.style.opacity="0";
    }
  }, [isInViewport]);

  const showPost=()=>{
    let opacity=0;
    let timer=setInterval(()=>{
      if(opacity===1){
        clearInterval(timer);
      }else{
        postRef.current.style.opacity=(opacity+=0.01);
      }
    },10)
    
  }
  return (
    <div ref={postRef} className={`post-card post-card_${props.theme}`}>
      <img src={props.image} alt='' className='post-card__image' />
      <div className='post-card__content'>
        <h4 className='post-card__title'>{props.title}</h4>

        <p className='post-card__info'>{props.info}</p>
        <p className='post-card__responses'>
          <a href='#'>
            {props.responses === 0 ? 'no responses' : (props.responses === 1 ? '1 response' : (props.responses + ' responses'))}
          </a>
        </p>
        <hr />
        <p className='post-card__text'>{props.text}</p>
        <span className='post-card__show-more'><a href='#'>(More...)</a></span>
      </div>
    </div>
  );
};
function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

export default PostCard;