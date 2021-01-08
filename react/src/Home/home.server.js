import React from 'react';
import HomeClient from './home.client';

const Home = () => {
  const title = 'Hello Home Page';
  // fetch
  return (
    <>
      <HomeClient title={title} />
    </>
  );
};

export default Home;
