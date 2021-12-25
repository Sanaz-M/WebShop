import './App.css';
import '../src/styles/register.css';
import '../src/styles/HomePage.css'
import '../src/styles/MyNavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';
import Contact from './components/Contact';



function App() {
  return ( 
  <BrowserRouter>
  <div id="main-body">
  
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
   
    
    </div>
    </BrowserRouter> 
  );
}

export default App;
