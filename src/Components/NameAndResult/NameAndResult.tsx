import { FC } from 'react';
import { useAppSelector } from '../../Content/Hooks/Hooks';
import './NameAndResult.scss';
import logo from '../../Assets/Photos/logo.png';
import questionMark from '../../Assets/SinglePlayer photos/Question.png';

type props = {
    hidden: boolean
}

const NameAndResult:FC<props> = ({ hidden }) => {
  const gameInfo = useAppSelector((state) => state.RpslsData);
  const scoreInfo = useAppSelector((state) => state.ScoreData);

  return (
    <div hidden={hidden} className="nameAndResult__container">
      <div className="nameAndResult__part__container">
        <h2 className="nameAndResult__player__name">{gameInfo.firstPlayerName}</h2>
        <img className="nameAndResult__player__photo" src={questionMark} alt="logo" />
        <h3 className="nameAndResult__player__score">{`Points: ${scoreInfo.firstPlayerScore}`}</h3>
      </div>

      <div className="nameAndResult__part__container">
        <img className="nameAndResult__logo" src={logo} alt="logo" />
        <h1 className="SPN__logo__text">{`You are playing till ${gameInfo.victories} points!`}</h1>
      </div>

      <div className="nameAndResult__part__container">
        <h2 className="nameAndResult__player__name">{gameInfo.secondPlayerName}</h2>
        <img className="nameAndResult__player__photo" src={questionMark} alt="logo" />
        <h3 className="nameAndResult__player__score">{`Points: ${scoreInfo.secondPlayerScore}`}</h3>
      </div>
    </div>
  );
};

export default NameAndResult;
