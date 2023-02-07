import React, { Fragment } from 'react';
import './MegaCategories.css'

const MegaCategories = () => {
    return (
        <Fragment>
            <li className="nav-item mega-dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
                </a>
                <div className="dropdown-menu ">
                    <ul>
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>

                        </ul>
                        <ul>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>

                        </ul>
                        <ul>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>
                        <li><a className="dropdown-item" href="#">Mega Menu Link</a></li>

                    </ul>
                </div>
            </li>
        </Fragment>
    );
};

export default MegaCategories;