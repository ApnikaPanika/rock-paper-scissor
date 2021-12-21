import './Reset.scss';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import TwoPlayerGame from './Pages/TwoPlayerGame/TwoPlayerGame';
import Home from './Pages/Home/Home';
import SinglePlayerGame from './Pages/SinglePlayerGame/SinglePlayerGame';

const App = () => (
  <div className="page__container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/twoPlayerGame" element={<TwoPlayerGame />} />
      <Route path="/singlePlayerGame" element={<SinglePlayerGame />} />
    </Routes>
  </div>
);

export default App;
