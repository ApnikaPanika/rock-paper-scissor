/* eslint-disable brace-style */
import './SinglePlayer.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Options, { optionArray } from '../Options/Options';
import { useAppDispatch, useAppSelector } from '../../Content/Hooks/Hooks';
import { addFirstPlayerScore, addSecondPlayerScore, setPlayersScoreToZero } from '../../Content/Slice/ScoreSlice';
import SinglePlayerNames from '../SinglePlayerNames/SPNames';

const SinglePlayer = () => {
  const scoreInfo = useAppSelector((state) => state.ScoreData);
  const dispatch = useAppDispatch();

  const [firstPlayerChoice, setFirstPlayerChoice] = useState('');
  const [secondPlayerChoice, setSecondPlayerChoice] = useState('');
  const [whatHappened, setWhatHappened] = useState('');
  const [openWinnerModal, setOpenWinnerModal] = useState(true);
  const [winnerText, setWinnerText] = useState('');

  const playAgainButton = () => {
    dispatch(setPlayersScoreToZero());
    setOpenWinnerModal(true);
  };

  const exitToHome = () => {
    setOpenWinnerModal(true);
    dispatch(setPlayersScoreToZero());
  };

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

  useEffect(() => {
    const random = Math.floor(Math.random() * optionArray.length);
    setSecondPlayerChoice(optionArray[random].name);
  }, [firstPlayerChoice]);

  const clickHandler = () => {
    if (firstPlayerChoice === secondPlayerChoice) {
      setWhatHappened('Draw');
      setFirstPlayerChoice('');
      setSecondPlayerChoice('');
    } else if (firstPlayerChoice === 'Rock' && secondPlayerChoice === 'Paper') {
      setWhatHappened('Legend won, because Paper covers Rock');
      secondWon();
    } else if (firstPlayerChoice === 'Paper' && secondPlayerChoice === 'Rock') {
      setWhatHappened('You won, because Paper covers Rock');
      firstWon();
    } else if (firstPlayerChoice === 'Rock' && secondPlayerChoice === 'Scissors') {
      setWhatHappened('You won, because Rock crushes Scissors');
      firstWon();
    } else if (firstPlayerChoice === 'Scissors' && secondPlayerChoice === 'Rock') {
      setWhatHappened('Legend won, because Rock crushes Scissors');
      secondWon();
    } else if (firstPlayerChoice === 'Paper' && secondPlayerChoice === 'Scissors') {
      setWhatHappened('Legend won, because Scissors cuts Paper');
      secondWon();
    } else if (firstPlayerChoice === 'Scissors' && secondPlayerChoice === 'Paper') {
      setWhatHappened('You won, because Scissors cuts Paper');
      firstWon();
    } else if (firstPlayerChoice === 'Rock' && secondPlayerChoice === 'Lizard') {
      setWhatHappened('You won, because Rock crushes Lizard');
      firstWon();
    } else if (firstPlayerChoice === 'Lizard' && secondPlayerChoice === 'Rock') {
      setWhatHappened('Legend won, because Rock crushes Lizard');
      secondWon();
    } else if (firstPlayerChoice === 'Scissors' && secondPlayerChoice === 'Lizard') {
      setWhatHappened('You won, because Scissors decapitates Lizard');
      firstWon();
    } else if (firstPlayerChoice === 'Lizard' && secondPlayerChoice === 'Scissors') {
      setWhatHappened('Legend won, because Scissors decapitates Lizard');
      secondWon();
    } else if (firstPlayerChoice === 'Rock' && secondPlayerChoice === 'Spock') {
      setWhatHappened('Legend won, because Spock vaporizes Rock');
      secondWon();
    } else if (firstPlayerChoice === 'Spock' && secondPlayerChoice === 'Rock') {
      setWhatHappened('You won, because Spock vaporizes Rock');
      firstWon();
    } else if (firstPlayerChoice === 'Scissors' && secondPlayerChoice === 'Spock') {
      setWhatHappened('Legend won, because Spock smashes Scissors');
      secondWon();
    } else if (firstPlayerChoice === 'Spock' && secondPlayerChoice === 'Scissors') {
      setWhatHappened('You won, because Spock smashes Scissors');
      firstWon();
    } else if (firstPlayerChoice === 'Lizard' && secondPlayerChoice === 'Spock') {
      setWhatHappened('You won, because Spock smashes Scissors');
      firstWon();
    } else if (firstPlayerChoice === 'Spock' && secondPlayerChoice === 'Lizard') {
      setWhatHappened('Legend won, because Lizard poisons Spock');
      secondWon();
    } else if (firstPlayerChoice === 'Lizard' && secondPlayerChoice === 'Paper') {
      setWhatHappened('You won, because Lizard eats Paper');
      firstWon();
    } else if (firstPlayerChoice === 'Paper' && secondPlayerChoice === 'Lizard') {
      setWhatHappened('Legend won, because Lizard eats Paper');
      secondWon();
    } else if (firstPlayerChoice === 'Spock' && secondPlayerChoice === 'Paper') {
      setWhatHappened('Legend won, because Paper disproves Spock');
      secondWon();
    } else if (firstPlayerChoice === 'Paper' && secondPlayerChoice === 'Spock') {
      setWhatHappened('You won, because Lizard eats Paper');
      firstWon();
    }
  };

  useEffect(() => {
    if (scoreInfo.firstPlayerScore === 3 && scoreInfo.firstPlayerScore > 0) {
      setOpenWinnerModal(!openWinnerModal);
      setWinnerText('Congrats, you won!');
    }
  }, [scoreInfo.firstPlayerScore]);

  useEffect(() => {
    if (scoreInfo.secondPlayerScore === 3 && scoreInfo.secondPlayerScore > 0) {
      setOpenWinnerModal(!openWinnerModal);
      setWinnerText('Legend was, is and will be legend!');
    }
  }, [scoreInfo.secondPlayerScore]);

  return (
    <div className="game__container">
      <SinglePlayerNames />
      <div>
        <h1 className="game__what__happened">
          {whatHappened === '' ? 'Nothing yet happened' : whatHappened}
        </h1>

        <div className="game__option__container">
          <div className="game__player__options">
            <Options setChoosenOption={setFirstPlayerChoice} />
          </div>
        </div>

        <div className="game__submit__container">
          <button className="game__submit__button" onClick={clickHandler}>Submit</button>
        </div>
      </div>
      <div hidden={openWinnerModal} className="modal">
        <div className="modal__container">
          {winnerText}
          <div className="SP__small__modal__container">
            <button className="SP__modal__button" onClick={playAgainButton}>Play Again</button>
            <Link className="SP__modal__button" to="/" onClick={exitToHome}>Exit</Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SinglePlayer;
