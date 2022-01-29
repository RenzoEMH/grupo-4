import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import Home from '../pages/Home';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
