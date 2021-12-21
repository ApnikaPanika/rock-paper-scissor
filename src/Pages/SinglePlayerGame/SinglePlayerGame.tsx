import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import SinglePlayer from '../../Components/SinglePlayerGame/SinglePlayer';

const SinglePlayerGame = () => {
  console.log(123);

  return (
    <div>
      <Link className="link__back" to="/">
        <FontAwesomeIcon
          icon={faLongArrowAltLeft}
        />
      </Link>
      <SinglePlayer />
    </div>
  );
};
export default SinglePlayerGame;
