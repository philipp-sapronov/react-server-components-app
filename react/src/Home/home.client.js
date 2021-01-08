import React, {useEffect, useState} from 'react';
import HomeView from './home.view';

const Home = ({title}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && <HomeView title={title} />;
};

export default Home;
