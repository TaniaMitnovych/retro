import React, { useState, useEffect, Suspense, useRef } from 'react';
import './reset.css';
import './App.css';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import ReadingBar from './components/readingBar/ReadingBar';
import Ribbon from './components/ribbon/Ribbon';
import SliderSection from './components/sliderSection/SliderSection';
import AboutIcon from './components/icons/AboutIcon';
import tvImage from './images/tv.png';
import AboutSection from './components/aboutSection/AboutSection';
import PortfolioSection from './components/portfolioSection/PortfolioSection';
import BlogSection from './components/blogSection/BlogSection';
import ContactsSection from './components/contactsSection/ContactsSection';


function App() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState();
  let currentHour = (new Date(Date.now())).getHours();
  const [theme, setTheme] = useState(
    currentHour >= 21 && currentHour <= 6
      ? 'dark'
      : 'light'
  );
  const switchTheme=()=>{
    setTheme(prev=>{return prev==='dark'?'light':'dark'});
  }
  const getPage = () => {
    return (
      <>
        <button className='theme-switcher' type='button' onClick={switchTheme}>{theme==='dark'?'Light':"Dark"}</button>
        <Header theme={theme} />
        <SliderSection theme={theme}/>
        <AboutSection theme={theme} />
        <PortfolioSection theme={theme} />
        <BlogSection theme={theme} />
        <ContactsSection />
      </>
    )
  }
  useEffect(()=>{
    setPage(getPage);
  }, [theme])
  useEffect(() => {
    setTimeout(()=>{
      setPage(getPage);
    }, 5000)
    
  },[])
  return (
    <Suspense>
      <div className="App">
        <Loader time='5000' />
        {page}
      </div>
    </Suspense>

  );
}

export default App;
