import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from "react-hot-toast";
import Footer from './components/nav/Footer';
import Menu from './components/nav/Menu';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import HomePage from './pages/HomePage';
import PrivetRoute from './components/routes/PrivetRoute';
import UserDashboard from './pages/user/UserDashboard';
import PageNotFound from './components/PageNotFound';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminRoute from './components/routes/AdminRoute';
import Category from './pages/admin/Category';
import Product from './pages/admin/Product';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
      <Toaster/>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />

          <Route path='/dashboard' element={<PrivetRoute/>}>
            <Route path='user' element={<UserDashboard/>} />
            <Route path='user/profile' element={<Profile/>} />
            <Route path='user/orders' element={<Orders/>} />
            
          </Route>

          <Route path='/dashboard' element={<AdminRoute/>}>
          <Route path='admin' element={<AdminDashboard/>} />
          <Route path='admin/category' element={<Category/>} />
          <Route path='admin/product' element={<Product/>} />
          </Route>

          <Route path='*' element={<PageNotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
