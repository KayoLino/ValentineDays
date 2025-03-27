
//Route
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home/Home';
import HowPlay from './pages/HowPlay/HowPlay';
import Ready from './pages/Ready/Ready';
import QuizzOne from './pages/quizz/1/QuizzOne';
import QuizzTwo from './pages/quizz/2/QuizzTwo';
import QuizzTree from './pages/quizz/3/QuizzTree';
import QuizzFour from './pages/quizz/4/QuizzFour';
import QuizzFive from './pages/quizz/5/QuizzFive';
import Congratulations from './pages/Congratulations/Congratulations';
import PuzzleGame from './pages/Puzzle/Puzzle';
import Cute from './pages/Cute/Cute';
import MusicPage from './pages/Music/MusicPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/howplay' element={<HowPlay />} />
          <Route path='/ready' element={<Ready />} />
          <Route path='/quizz/1' element={<QuizzOne />} />
          <Route path='/quizz/2' element={<QuizzTwo />} />
          <Route path='/quizz/3' element={<QuizzTree />} />
          <Route path='/quizz/4' element={<QuizzFour />} />
          <Route path='/quizz/5' element={<QuizzFive />} />
          <Route path='/congratulations' element={<Congratulations />} />
          <Route path='/puzzle' element={<PuzzleGame />} />
          <Route path='/cute' element={<Cute />} />
          <Route path='/music' element={<MusicPage />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
