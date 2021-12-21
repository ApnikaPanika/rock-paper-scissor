import playerPhoto from '../../Assets/SinglePlayer photos/Question.png';
import PCphoto from '../../Assets/SinglePlayer photos/Sheldon.jpg';
import { useAppSelector } from '../../Content/Hooks/Hooks';
import './SPNames.scss';
import logo from '../../Assets/Photos/logo.png';

const SinglePlayerNames = () => {
  const scoreInfo = useAppSelector((state) => state.ScoreData);

  return (
    <div>
      <div className="SPN__container">
        <div className="SPN__small__containers">
          <h2 className="SPN__names">You</h2>
          <img className="SPN__you__photo" src={playerPhoto} alt="Question mark" />
          <h2 className="SPN__score">{`Score: ${scoreInfo.firstPlayerScore}`}</h2>
        </div>
        <div className="SPN__small__containers">
          <img className="SPN__logo__photo" src={logo} alt="logo" />
          <h1 className="SPN__logo__text">You are playing till 3 wins!</h1>
        </div>
        <div className="SPN__small__containers">
          <h2 className="SPN__names">R.P.S.L.S. Legend</h2>
          <img className="SPN__legend__photo" src={PCphoto} alt="Legend" />
          <h2 className="SPN__score">{`Score: ${scoreInfo.secondPlayerScore}`}</h2>
        </div>
      </div>
    </div>
  );
};
export default SinglePlayerNames;
