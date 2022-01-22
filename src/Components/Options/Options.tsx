import { FC } from 'react';
import './Options.scss';
import lizard from '../../Assets/Options/lizard.png';
import paper from '../../Assets/Options/paper.png';
import rock from '../../Assets/Options/Rock.png';
import scissors from '../../Assets/Options/scissors.png';
import spock from '../../Assets/Options/spock.png';

type Props = {
    setChoosenOption: (option:string) => void
}

type optionType = {
    name: string
    imgURL:string
}

export const optionArray: optionType[] = [
  { name: 'Rock', imgURL: rock },
  { name: 'Paper', imgURL: paper },
  { name: 'Scissors', imgURL: scissors },
  { name: 'Lizard', imgURL: lizard },
  { name: 'Spock', imgURL: spock }];

const Options:FC<Props> = ({ setChoosenOption }) => {
  const clickHandler = (option:string) => {
    setChoosenOption(option);
  };

  return (
    <div className="options__container">
      {optionArray.map(({ name, imgURL }) => (
        <div className="option__small__container" onClick={() => clickHandler(name)} key={name}>
          <img className="option__image" src={imgURL} alt={name} />
          <button className="option__button" key={name}>{name}</button>
        </div>
      ))}
    </div>
  );
};
export default Options;
