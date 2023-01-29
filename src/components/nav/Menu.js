import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import "./menu.css";

const Menu = () => {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const logout = ()=> {
        setAuth({ ...auth, user: null, token: "" })
        localStorage.removeItem("auth")
        navigate("/login")
    }

    return (
        <div>
            <ul className="nav d-flex justify-content-around shadow-sm mb-2">
                <li className="nav-item d-flex align-items-center">
                <a className="navbar-brand text-primary" aria-current="page" href="/">
                    <i class="fa-brands fa-shopify"></i>
                    <b>eShop</b>
                </a>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                    HOME
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/shop">
                    SHOP
                </NavLink>
                </li>
            
                {!auth?.user ? (
                <>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                        LOGIN
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                        REGISTER
                    </NavLink>
                    </li>
                </>
                ) : (
                <div className="dropdown">
                    <li>
                    <a
                        className="nav-link pointer dropdown-toggle"
                        data-bs-toggle="dropdown"
                    >
                        {auth?.user?.name}
                    </a>

                    <ul className="dropdown-menu">
                        <li>
                        <NavLink
                            className="nav-link"
                            to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                        >
                            Dashboard
                        </NavLink>
                        </li>
                        <li>
                        <NavLink className="nav-link" to={`/dashboard/${auth?.user?.role === 1 ? "admin-profile" : "user-profile"
                            }`}> Profile </NavLink>
                        </li>
                            
                        <li className="nav-item pointer ">
                        <a onClick={logout} className="nav-link">
                            Logout
                        </a>
                        </li>
                    </ul>
                    </li>
                </div>
                )}
            </ul>
        </div>
    );
};

export default Menu;