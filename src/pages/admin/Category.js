import React from 'react';
import AdminMenu from '../../components/nav/AdminMenu';
import { useAuth } from '../../context/Auth';

const Category = () => {

    const [auth, setAuth] = useAuth();
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-3">
                    <AdminMenu/>
                </div>
                <div className="col-md-9">
                    <div className="p-3 mt-2 mb-2 h4 bg-light">Manage Categories</div>

                    <p>Create category form...</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Category;