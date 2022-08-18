import React from 'react';
import Logo from '../logo/Logo';
import './Header.css';
import ReadingBar from '../readingBar/ReadingBar';
const Header = (props) => {
  return (
    <div className={`header header-${props.theme}`}>
      <div className='container header__container'>
        <ul className='header__list header__list-left'>
          <li><a href='#about'>About me</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
        </ul>
        <Logo />
        <ul className='header__list header__list-right'>
          <li><a href='#blog'>My Blog</a></li>
          <li><a href='#contacts'>Contact me</a></li>
        </ul>
      </div>
      <hr className='header__line_dashed dashed-line'/>
      <ReadingBar/>
    </div>
  );
};

export default Header;