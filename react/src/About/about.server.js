import React from 'react';
import AboutClient from './about.client';

const About = () => {
  const text = 'text';
  const title = 'title';
  // fetch
  return (
    <>
      <AboutClient text={text} title={title} />
    </>
  );
};

export default About;
