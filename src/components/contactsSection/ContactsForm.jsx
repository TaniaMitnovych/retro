import React from 'react';

const ContactsForm = (props) => {
  return (
    <form action='' method='post' id='contacts-form' className='contacts-form'>
      <input className='contacts-form__input' type='text' value='name' placeholder="Name" name='name' id='name'/>
      <input className='contacts-form__input' type='email' value='email' placeholder='Email address' name='email' id='email'/>
      <input className='contacts-form__input' type='text' value='subject' placeholder='Subject:' name='subject' id='subject'/>
      <textarea className='contacts-form__text' form='contacts-form' value='message' rows='7' name='message' id='message'>

      </textarea>
      <button type='submit' className='contacts-form__submit-button'>Send Message</button>
    </form>
  );
};

export default ContactsForm;