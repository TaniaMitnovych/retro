import React from 'react';
import SectionHeader from '../sectionHeader/SectionHeader';
import ContactsForm from './ContactsForm';
import twitterIcon from '../../images/twitter.png';
import facebookIcon from '../../images/facebook.png';
import gplusIcon from '../../images/gplus.png';
import linkedInIcon from '../../images/linkedin.png';
import pinterest from '../../images/pinterest.png';
import './ContactsSection.css';
const ContactsSection = (props) => {
  return (
    <section className='contacts-section' id='contacts' >
      <div className='container'>
        <hr className='contacts-section__line_dashed-top dashed-line' />

        <SectionHeader
          color='light'
          theme='dark'
          header="Contact me"
          subheader="I'll be glad to answer your questions!"
        />
        <ContactsForm />

        <p className='contacts-section__text'>I am social</p>
        <ul className='contacts-section__social-list'>
          <li className='contacts-section__social-item'><a href="https://twitter.com/?lang=uk"><img src={twitterIcon} /></a></li>
          <li className='contacts-section__social-item'><a href="https://m.facebook.com/profile.php"><img src={facebookIcon} /></a></li>
          <li className='contacts-section__social-item'><a href="mailto:taniamitnovych15@gmail.com"><img src={gplusIcon} /></a></li>
          <li className='contacts-section__social-item'><a href="https://www.pinterest.ca/"><img src={pinterest} /></a></li>
          <li className='contacts-section__social-item'><a href="https://www.linkedin.com/in/tetiana-mitnovych-743850235/"><img src={linkedInIcon} /></a></li>
        </ul>
        <hr className='contacts-section__line_dashed-bottom dashed-line' />
      </div>
    </section>
  );
};

export default ContactsSection;