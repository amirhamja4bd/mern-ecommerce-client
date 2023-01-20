import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
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

        <div className=''>
        <ul className="nav d-flex justify-content-between shadow-sm mb-2 px-5">
            <li className='text-primary '> <NavLink className="nav-link font-weight-bold" to="/">  <i class="fa-brands fa-shopify"></i>  <b>eShop</b>  </NavLink> </li>
            <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/"> HOME </NavLink>
            </li>

            {!auth?.user ? (
            <>
                <li className="nav-item">
                <NavLink className="nav-link" to="/login"> LOGIN </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/register"> REGISTER </NavLink>
                </li>
            </>
            ) : (
                <div>
                
                <Dropdown>
                <Dropdown.Toggle className='' variant="primary" id="dropdown-basic">
                {auth?.user?.name}
                </Dropdown.Toggle>

                <Dropdown.Menu className=''>
                    <NavLink className='nav-link' to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} >Dashboard</NavLink>
                    
                    <NavLink onClick={logout} className=" nav-link" to="/login">
                    LOGOUT</NavLink>
                </Dropdown.Menu>
                </Dropdown>
                

                {/* <li className="nav-item">
                <NavLink onClick={logout} className="nav-link" to="/login">
                    LOGOUT
                </NavLink>
                </li> */}
                </div>
            )}
            
        </ul>
        </div>










        // <div>
        //     <Navbar className='header' collapseOnSelect expand="lg" bg="dark" variant="dark" >
        //         <Container>
        //             <Navbar.Brand className='text-primary' href="/">  <i class="fa-brands fa-shopify"></i>  eShop  </Navbar.Brand>
        //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //                 <Navbar.Collapse id="responsive-navbar-nav">
        //                 <Nav className="me-auto">
        //                     <NavLink className="nav-link" to="/">Home</NavLink>
        //                 </Nav>
        //                 {!auth?.user ? (
        //                   <> 
        //                 <Nav> 
        //                     <NavLink className="nav-link" to="/register">Register</NavLink>
        //                     <NavLink className="nav-link" to="/login">Login</NavLink>
        //                     </>
        //                     ) : (
        //                     <NavLink className="nav-link" to="/login">Log Out</NavLink>
        //                     )}
        //                 </Nav>
                        
        //                 </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        // </div>


    );
};

export default Menu;