/* eslint-disable react/jsx-props-no-spreading */
import './StartingForm.scss';
import { useForm } from 'react-hook-form';
import { FC } from 'react';
import { useAppDispatch } from '../../Content/Hooks/Hooks';
import { infoToStart } from '../../Content/Slice/InfoSlice';

type props = {
    formHidden: boolean
    setFormHidden: (hidden: boolean) => void
    setGameHidden: (gameHidden: boolean) => void
}

export type infoToStartGame = {
    firstPlayerName: string,
    secondPlayerName: string,
    victories: number
}

const StartingForm:FC<props> = ({ formHidden, setFormHidden, setGameHidden }) => {
  const dispatch = useAppDispatch();

  const {
    register, handleSubmit, reset, formState: { errors }, // TODO ielikt errorus
  } = useForm<infoToStartGame>();

  const submitHandler = ({ firstPlayerName, secondPlayerName, victories }:infoToStartGame) => {
    dispatch(infoToStart({ firstPlayerName, secondPlayerName, victories }));
    setGameHidden(false);
    reset();
    setFormHidden(true);
  };

  return (
    <div hidden={formHidden}>

      <div className="form__modal__window">
        <form className="form__container" onSubmit={handleSubmit(submitHandler)}>

          <div>
            <label htmlFor="firstPlayer" className="form__small__container">
              First player name
              <input
                type="text"
                placeholder="Tom"
                id="firstPlayer"
                {...register('firstPlayerName', {
                  required: 'This field is required',
                  maxLength: { value: 24, message: 'Too much letters' },
                })}
              />
            </label>
            {errors.firstPlayerName && <p className="validation__texts">{errors.firstPlayerName.message}</p>}
          </div>

          <div>
            <label htmlFor="secondPlayer" className="form__small__container">
              Second player name
              <input
                type="text"
                placeholder="Bob"
                id="secondPlayer"
                {...register('secondPlayerName', {
                  required: 'This field is required',
                  maxLength: { value: 24, message: 'Too much letters' },
                })}
              />
            </label>
            {errors.secondPlayerName && <p className="validation__texts">{errors.secondPlayerName.message}</p>}
          </div>

          <div>
            <label htmlFor="victories" className="form__small__container">
              How many wins needed?
              <input
                type="number"
                placeholder="3"
                id="victories"
                {...register('victories', {
                  valueAsNumber: true,
                  required: 'This field is required',
                })}
              />
            </label>
            {errors.victories && <p className="validation__texts">{errors.victories.message}</p>}
          </div>
          <button className="form__submit__button">Start</button>

        </form>
      </div>

    </div>
  );
};

export default StartingForm;
