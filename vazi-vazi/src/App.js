import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from './components/Registration';
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
