import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import Game from '../../Components/TwoPlayerGame/TwoPlayer';
import NameAndResult from '../../Components/NameAndResult/NameAndResult';
import StartingForm from '../../Components/StartingForm/StartingForm';

const TwoPlayerGame = () => {
  const [gameHidden, setGameHidden] = useState(true);
  const [formHidden, setFormHidden] = useState(false);

  return (
    <div>
      <Link className="link__back" to="/">
        <FontAwesomeIcon
          icon={faLongArrowAltLeft}
        />
      </Link>
      <div className="page__game__container">
        <NameAndResult hidden={gameHidden} />
        <Game gameHidden={gameHidden} setGameHidden={setGameHidden} setFormHidden={setFormHidden} />
      </div>
      <StartingForm
        formHidden={formHidden}
        setFormHidden={setFormHidden}
        setGameHidden={setGameHidden}
      />
    </div>
  );
};

export default TwoPlayerGame;
