/* eslint-disable brace-style */
import './TwoPlayer.scss';
import { useState, FC, useEffect } from 'react';
import Options from '../Options/Options';
import { useAppDispatch, useAppSelector } from '../../Content/Hooks/Hooks';
import { addFirstPlayerScore, addSecondPlayerScore } from '../../Content/Slice/ScoreSlice';
import WhoWonModal from '../WhoWonModal/WhoWonModal';

type props = {
    gameHidden:boolean
    setGameHidden: (showStart:boolean) => void
    setFormHidden: (openForm:boolean) => void
}

const Game:FC<props> = ({ gameHidden, setGameHidden, setFormHidden }) => {
  const gameInfo = useAppSelector((state) => state.RpslsData);
  const scoreInfo = useAppSelector((state) => state.ScoreData);
  const dispatch = useAppDispatch();

  const [firstPlayerChoice, setFirstPlayerChoice] = useState('');
  const [secondPlayerChoice, setSecondPlayerChoice] = useState('');
  const [whatHappened, setWhatHappened] = useState('');
  const [showWinnerModal, setShowWinnerModal] = useState(true);
  const [whoWonText, setWhoWonText] = useState('');

  const firstWon = () => {
    dispatch(addFirstPlayerScore());
    setFirstPlayerChoice('');
    setSecondPlayerChoice('');
  };

  const secondWon = () => {
    dispatch(addSecondPlayerScore());
    setFirstPlayerChoice('');
    setSecondPlayerChoice('');
  };

  const clickHandler = () => {
    if (firstPlayerChoice === secondPlayerChoice) {
      setWhatHappened('neizšķirts');
      setFirstPlayerChoice('');
      setSecondPlayerChoice('');
    } else if (firstPlayerChoice === 'Rock' && secondPlayerChoice === 'Paper') {
      setWhatHappened('2nd player won, because Paper covers Rock');
      secondWon();
    } else if (firstPlayerChoice === 'Paper' && secondPlayerChoice === 'Rock') {
      setWhatHappened('1st player won, because Paper covers Rock');
      firstWon();
    } else if (firstPlayerChoice === 'Rock' && secondPlayerChoice === 'Scissors') {
      setWhatHappened('1st player won, because Rock crushes Scissors');
      firstWon();
    } else if (firstPlayerChoice === 'Scissors' && secondPlayerChoice === 'Rock') {
      setWhatHappened('2nd player won, because Rock crushes Scissors');
      secondWon();
    } else if (firstPlayerChoice === 'Paper' && secondPlayerChoice === 'Scissors') {
      setWhatHappened('2nd player won, because Scissors cuts Paper');
      secondWon();
    } else if (firstPlayerChoice === 'Scissors' && secondPlayerChoice === 'Paper') {
      setWhatHappened('1st player won, because Scissors cuts Paper');
      firstWon();
    } else if (firstPlayerChoice === 'Rock' && secondPlayerChoice === 'Lizard') {
      setWhatHappened('1st player won, because Rock crushes Lizard');
      firstWon();
    } else if (firstPlayerChoice === 'Lizard' && secondPlayerChoice === 'Rock') {
      setWhatHappened('2nd player won, because Rock crushes Lizard');
      secondWon();
    } else if (firstPlayerChoice === 'Scissors' && secondPlayerChoice === 'Lizard') {
      setWhatHappened('1st player won, because Scissors decapitates Lizard');
      firstWon();
    } else if (firstPlayerChoice === 'Lizard' && secondPlayerChoice === 'Scissors') {
      setWhatHappened('2nd player won, because Scissors decapitates Lizard');
      secondWon();
    } else if (firstPlayerChoice === 'Rock' && secondPlayerChoice === 'Spock') {
      setWhatHappened('2nd player won, because Spock vaporizes Rock');
      secondWon();
    } else if (firstPlayerChoice === 'Spock' && secondPlayerChoice === 'Rock') {
      setWhatHappened('1st player won, because Spock vaporizes Rock');
      firstWon();
    } else if (firstPlayerChoice === 'Scissors' && secondPlayerChoice === 'Spock') {
      setWhatHappened('2nd player won, because Spock smashes Scissors');
      secondWon();
    } else if (firstPlayerChoice === 'Spock' && secondPlayerChoice === 'Scissors') {
      setWhatHappened('1st player won, because Spock smashes Scissors');
      firstWon();
    } else if (firstPlayerChoice === 'Lizard' && secondPlayerChoice === 'Spock') {
      setWhatHappened('1st player won, because Spock smashes Scissors');
      firstWon();
    } else if (firstPlayerChoice === 'Spock' && secondPlayerChoice === 'Lizard') {
      setWhatHappened('2nd player won, because Lizard poisons Spock');
      secondWon();
    } else if (firstPlayerChoice === 'Lizard' && secondPlayerChoice === 'Paper') {
      setWhatHappened('1st player won, because Lizard eats Paper');
      firstWon();
    } else if (firstPlayerChoice === 'Paper' && secondPlayerChoice === 'Lizard') {
      setWhatHappened('2nd player won, because Lizard eats Paper');
      secondWon();
    } else if (firstPlayerChoice === 'Spock' && secondPlayerChoice === 'Paper') {
      setWhatHappened('2nd player won, because Paper disproves Spock');
      secondWon();
    } else if (firstPlayerChoice === 'Paper' && secondPlayerChoice === 'Spock') {
      setWhatHappened('1st player won, because Lizard eats Paper');
      firstWon();
    }
  };

  useEffect(() => {
    if (scoreInfo.firstPlayerScore === gameInfo.victories && scoreInfo.firstPlayerScore > 0) {
      setShowWinnerModal(false);
      setWhoWonText(`${gameInfo.firstPlayerName} you won, congrats!`);
    }
  }, [scoreInfo.firstPlayerScore]);

  useEffect(() => {
    if (scoreInfo.secondPlayerScore === gameInfo.victories && scoreInfo.secondPlayerScore > 0) {
      setShowWinnerModal(false);
      setWhoWonText(`${gameInfo.secondPlayerName} you won, congrats!`);
    }
  }, [scoreInfo.secondPlayerScore]);

  return (
    <div className="game__container">
      <div hidden={gameHidden}>
        <h1 className="game__what__happened">
          {whatHappened === '' ? 'Nothing yet happened' : whatHappened}
        </h1>
        <div className="game__option__container">
          <div className="game__player__options">
            <Options setChoosenOption={setFirstPlayerChoice} />
          </div>
          <div className="game__player__options">
            <Options setChoosenOption={setSecondPlayerChoice} />
          </div>

        </div>
        <div className="game__submit__container">
          <button onClick={clickHandler} className="game__submit__button">Submit</button>
        </div>
      </div>

      <WhoWonModal
        showWinnerModal={showWinnerModal}
        setShowWinnerModal={setShowWinnerModal}
        setGameHidden={setGameHidden}
        whoWonText={whoWonText}
        setWhatHappened={setWhatHappened}
        setFormHidden={setFormHidden}
      />
    </div>
  );
};

export default Game;
