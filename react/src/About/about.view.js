import {Link} from 'react-router-dom';

const About = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>Hallo about page</h2>
      <Link to={'/'}>Home page</Link>
    </div>
  );
};

export default About;
