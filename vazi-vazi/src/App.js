import './App.css';
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
import UserList from './components/AdminDashboard/user/UserList';
import ProductList from './components/AdminDashboard/product/ProductList';
import SingleUser from './components/AdminDashboard/user/SingleUser';
import SingleProduct from './components/AdminDashboard/product/SingleProduct';

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
          <Route path="/admin-dashboard/userlist" element={<UserList />} />
          <Route path="/admin-dashboard/userlist/:id" element={<SingleUser />} />
          <Route path="/admin-dashboard/productlist" element={<ProductList />} />
          <Route path="/admin-dashboard/productlist/:id" element={<SingleProduct />} />
        </Routes>
      </div>


    </BrowserRouter>
  );
}

export default App;
