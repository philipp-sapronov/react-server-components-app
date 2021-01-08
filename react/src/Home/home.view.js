import {Link} from 'react-router-dom';

const Home = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
      <Link to={'/about'}>About page</Link>
    </div>
  );
};

export default Home;
