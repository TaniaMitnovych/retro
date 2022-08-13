import React, {useState, useEffect} from 'react';
import './ReadingBar.css';

const ReadingBar = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  });
  // scroll function
  const scrollHeight = () => {
    let el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    let percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    // store percentage in state
    setWidth(percent);
  };
  return (
    <div className='reading-bar'>
      <div className='reading-bar__progress-line' style={{width:width+'%'}} >

      </div>
    </div>
  );
};

export default ReadingBar;