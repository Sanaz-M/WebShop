import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from './components/Registration';
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return ( 
  <div id="main-body">
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
   
    </BrowserRouter> 
    </div>
  );
}

export default App;
