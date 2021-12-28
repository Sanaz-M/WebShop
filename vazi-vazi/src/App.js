import './App.css';
import '../src/styles/register.css';
import '../src/styles/HomePage.css'
import '../src/styles/MyNavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/register&login/Registration';
import HomePage from './components/HomePage';
import LogIn from './components/register&login/LogIn';
import Contact from './components/Contact';
import ShoppingCart from './components/ShoppingCart';
import Admin from './components/AdminDashboard/Admin';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <BrowserRouter>
      <div id="main-body">
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/admin-dashboard" element={<Admin />} />
        </Routes>
      </div>


    </BrowserRouter>
  );
}

export default App;
