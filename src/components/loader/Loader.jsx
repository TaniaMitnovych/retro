import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import './Loader.css';
const Loader = (props) => {
  const [visible, setVisiblity] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisiblity(false);
    }, props.time)
  })
  return (
    visible &&
    <div className='loader'>
      <div className='loader__item loader__item1'>
        <div className='loader__item loader__item2'>
          <div className='loader__item loader__item3'>
            <div className='loader__item loader__item4'>
              <div className='loader__item loader__item5'>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Loader;