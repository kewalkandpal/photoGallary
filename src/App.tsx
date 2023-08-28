import './App.css';
import Navbar from './component/Navbar';
import Board from './pages/Board';
import CreateFolder from './pages/CreateFolder';
import Gallary from './pages/Gallary';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className='flex items-center flex-col bg-gradient-to-b from-purple-200 via-pink-200 to-purple-200 h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Board />} />
        <Route path='/create' element={<CreateFolder />} />
        <Route path='/gallary/:folder/:id' element={<Gallary />} />
      </Routes>
    </main>
  );
}

export default App;
