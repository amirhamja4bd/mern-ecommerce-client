import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import MegaCategories from '../forms/MegaCategories';
import SearchForm from '../forms/SearchForm';
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
            <ul className="nav d-flex px-5 shadow-sm mb-2 ">
                <li className="nav-item d-flex align-items-center me-5">
                <a className="navbar-brand text-primary" aria-current="page" href="/">
                    <i class="fa-brands fa-shopify"></i>
                    <b>eShop</b>
                </a>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                    HOME
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/shop">
                    SHOP
                </NavLink>
                </li>

                <MegaCategories/>

                {/* <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/shop">
                    <MegaCategories/>
                </NavLink>
                </li> */}
                <div className=' d-flex ms-auto'>
                <SearchForm/>
            
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
                <div className="dropdown bg-primary my-1 ms-3 " style={{borderRadius:"25px" , maxHeight:"38px"}}>
                    <li>
                    <a
                        className="nav-link pointer dropdown-toggle text-light"
                        data-bs-toggle="dropdown"
                        style={{ marginBottom:"10px"}}
                    >
                        {/* <img className='me-2 pb-2' src="https://raw.githubusercontent.com/amirhamja4bd/imageemail/main/mee.png?token=GHSAT0AAAAAAB3LMGF3WM5AWAF3NCMZD6NGY7CDWCA" alt="" style={{height:"28px"}}/> */}
                        
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
                </div>
            </ul>
        </div>
    );
};

export default Menu;