import React, { useEffect } from 'react';
import Form from './Form.client';
import Header from '../Header/Header.client';

export default () => {
  // contact-form-page__wrapper
  return (
    <>
      <Header title="New Contact" />
      <div className="contact-form-page__container">
        <div className="contact-form-page__inner">
          <Form />
        </div>
      </div>
    </>
  );
};
