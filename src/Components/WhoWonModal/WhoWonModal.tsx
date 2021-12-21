import './WhoWonModal.scss';
import { FC } from 'react';
import { setPlayersScoreToZero } from '../../Content/Slice/ScoreSlice';
import { useAppDispatch } from '../../Content/Hooks/Hooks';

type props = {
    showWinnerModal: boolean
    setShowWinnerModal: (doNotShow: boolean) => void
    setGameHidden: (showStart:boolean) => void
    whoWonText: string,
    setWhatHappened: (setEmpty:string)=> void
    setFormHidden: (showForm: boolean) => void
}

const WhoWonModal:FC<props> = ({
  showWinnerModal, setShowWinnerModal, setGameHidden, whoWonText, setWhatHappened, setFormHidden,
}) => {
  const dispatch = useAppDispatch();

  const exitGame = () => {
    setShowWinnerModal(true);
    setGameHidden(true);
    dispatch(setPlayersScoreToZero());
    setWhatHappened('');
    setFormHidden(false);
  };

  const sameGame = () => {
    setShowWinnerModal(true);
    dispatch(setPlayersScoreToZero());
    setWhatHappened('');
  };

  return (
    <div hidden={showWinnerModal}>
      <div className="modal__window__background">
        <div className="modal__window__container">
          <h2>{whoWonText}</h2>
          <div className="modal__button__container">
            <button className="modal__window__button" onClick={sameGame}>Play same game again</button>
            <button className="modal__window__button" onClick={exitGame}>Exit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhoWonModal;
