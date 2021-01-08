import React, {useEffect, useState} from 'react';
import AboutView from './about.view';

const About = ({title, text}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && <AboutView title={title} text={text} />;
};

export default About;
