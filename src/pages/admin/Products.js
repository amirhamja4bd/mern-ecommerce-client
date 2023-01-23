import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminMenu from '../../components/nav/AdminMenu';
import moment from "moment";
const AdminProducts = () => {

    const [products, setProducts ] = useState([]);

    useEffect(() => {
        loadProducts();
    },[])

    const loadProducts = async () => {
        try{
            const {data} = await axios.get('/products');
            setProducts(data);
            console.log(" products==>",data)
        }
        catch(error){
            console.log(error);
        }
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu/>
                    </div>
                    <div className="col-md-9">
                        <div className="p-2 mt-2 mb-2 h4 bg-light">
                            Products
                        </div>

                        <div className="row">
                            {products.map((p)=>(
                                
                                <div className="col-sm-4 col-md-3 my-2 ">
                                    <Link className='nav-link' key={p._id} to={`/dashboard/admin/product/update`}>
                                        <div class="card shadow ">
                                            <img

                                                src={`${process.env.REACT_APP_API}/product/photo/${p._id}`}

                                                alt={p.name}
                                                className="img img-fluid rounded-top"
                                            />
                                            <div class="card-body">
                                            <h5 class="card-title">{p.name}</h5>
                                            <p class="card-text">{p.description}</p>
                                            </div>
                                            <div class="card-footer">
                                                <div className='d-flex justify-content-between'>
                                                    <small class="text-muted">{moment(p.createdAt).format( "Do MMMM YYYY")}</small>
                                                    <small class="text-muted">{moment(p.createdAt).format( "h:mm:ss a")}</small>
                                                </div>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProducts;