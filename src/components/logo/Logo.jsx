import React from 'react';
import logoSticker from '../../logo/logo.svg';
import './Logo.css';
const Logo = () => {
  return (
    <div className='logo'>
      {/* <img className='logo__image' src={logoSticker} alt=""/> */}
      <div className='logo__letters'>JD</div>
    </div>
  );
};

export default Logo;