/* eslint-disable camelcase */
import { Link } from 'react-router-dom';
import logo from '../../Assets/Photos/logo.png';
import './Home.scss';

const Home = () => (
  <div className="home__container">
    <h1 className="home__title">WELCOME TO R.P.S.L.S. GAME</h1>
    <div className="home__logo__container">
      <img className="home__logo" src={logo} alt="RPSLS__logo" />
    </div>
    <div className="home__links__container">
      <Link className="home__link" to="/singlePlayerGame">Single player game</Link>
      <Link className="home__link" to="/twoPlayerGame">Two player game</Link>
    </div>
  </div>
);

export default Home;
