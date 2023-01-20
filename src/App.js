import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from "react-hot-toast";
import Footer from './components/nav/Footer';
import Menu from './components/nav/Menu';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import HomePage from './pages/HomePage';
import PrivetRoute from './components/routes/PrivetRoute';
import Dashboard from './pages/user/Dashboard';
import PageNotFound from './components/PageNotFound';
import AdminDashboard from './pages/admin/Dashboard';

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
            <Route path='user' element={<Dashboard/>} />
            <Route path='admin' element={<AdminDashboard/>} />
          </Route>

          <Route path='*' element={<PageNotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
