import { Select } from 'antd';
import { Option } from 'antd/es/mentions';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import AdminMenu from '../../components/nav/AdminMenu';
import Swal from 'sweetalert2'


const AdminProductUpdateDelete = () => {

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [shipping, setShipping] = useState("");
    const [quantity, setQuantity] = useState("");
    const [id, setId] = useState("");

    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        loadCategories();
        loadProducts();
    },[]);

    // Category Load
    const loadCategories =async () =>{
        try{
            const { data } = await axios.get('/categories');
            setCategories(data);
        }
        catch(error){
            console.log(error);
        }
    }

    // Products Load
    const loadProducts =async () =>{
        try{
            const { data } = await axios.get(`/product/${params.slug}`);
            setName(data.name);
            setDescription(data.description);
            setPrice(data.price);
            setCategory(data.category._id);
            setShipping(data.shipping);
            setQuantity(data.quantity);
            setId(data._id);
        }
        catch(error){
            console.log(error);
        }
    }

    // Product Submit
    const handleUpdate = async (e) =>{
        e.preventDefault();
        try{
            const productData = new FormData();
            photo && productData.append("photo", photo);
            productData.append("name", name);
            productData.append("description", description);
            productData.append("price", price);
            productData.append("category", category);
            productData.append("shipping", shipping);
            productData.append("quantity", quantity);

            const { data } = await axios.put(`/product/${id}`, productData);
            if(data?.error){
                console.log('productUp--->',data)
                toast.error(data.error);
            }
            else{
                toast.success(`'${data.name}' is created successfully`);
                navigate('/dashboard/admin/products');
            }
        }
        catch(error){
            console.log(error);
            toast.error('Product create failed. try again later');
        }
    };

    // Handle Delete
    // const handleDelete = async (req, res) =>{
    //     try{
    //         let answer = window.confirm("Are you Sure you want to Delete this Product?");
    //         if (!answer) {
    //             return;
    //         }
    //         const { data } = await axios.delete(`/product/${id}`);
    //         toast.success(`"${data.name}" is deleted`);
    //         navigate("/dashboard/admin/products");
    //     }
    //     catch(error){
    //         console.log(error);
    //         toast("Delete failed. try again later");
    //     }
    // }

    // Delete 
    const handleDelete = async (req, res) =>{
        Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`/product/${id}`);
                    navigate("/dashboard/admin/products");
                }
            })
    }
    

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-3">
                    <AdminMenu/>
                </div>
                <div className="col-md-9">
                    <div className="p-3 mt-2 mb-2 h4 bg-light">Create Products</div>
                    
                    <div className='w-50 mx-auto'>

                        {/*  is photo Available or Not*/}
                        {photo ? (
                            <div className='text-center'>
                                <img 
                                    src={URL.createObjectURL(photo)} 
                                    alt="Product Photo"
                                    className="img img-responsive rounded "
                                    height="150px"
                                />
                                    
                            </div>
                        ) : (
                            
                            <div className='text-center'>
                                <img 
                                src={`${process.env.REACT_APP_API}/product/photo/${id}`} 
                                alt=""
                                height="150px"
                                />
                            </div>
                        )}
                        
                        {/* Photo Upload */}
                        <div className='pt-2'>
                            <label className='btn btn-primary col-12 mb-3'>

                                {photo ? photo.name : "Upload photo"}
                                
                                <input
                                    type="file"
                                    name="photo"
                                    accept="image/*"
                                    onChange={(e)=> setPhoto(e.target.files[0])}
                                    hidden
                                ></input>
                            </label>
                        </div>

                            {/* Product Name */}
                        <input
                            type="text"
                            className="form-control p-2 mb-3"
                            placeholder="Write a name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        {/* Product Description */}    
                        <textarea
                            type="text"
                            className="form-control p-2 mb-3"
                            placeholder="Write a description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        {/* Product Price */}
                        <input
                            type="number"
                            min="0"
                            className="form-control p-2 mb-3"
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        
                        {/* Product Category */}
                        <Select
                            showSearch
                            bordered={false}
                            size="small"
                            className='form-select mb-3'
                            placeholder='Choose Category'
                            onChange={(value) => setCategory(value)}
                            value={category}
                        >

                            {categories?.map((c) => (
                                <Option key={c._id} value={c._id}>
                                    {c.name}
                                </Option>
                            ))}
                        </Select>

                        {/* Product Shipping? */}
                        <Select
                            bordered={false}
                            size="small"
                            className="form-select mb-3"
                            placeholder="Choose shipping"
                            onChange={(value) => setShipping(value)}
                            value={shipping ? "Yes" : "No"}
                        >
                            <Option value="0">No</Option>
                            <Option value="1">Yes</Option>
                        </Select>

                        {/* Product Quantity */}
                        <input
                            type="number"
                            min="1"
                            className="form-control p-2 mb-3"
                            placeholder="Enter quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                        {/* Submit */}
                        <div className=' d-flex justify-content-between'>
                            <button onClick={handleUpdate} className="btn btn-primary mb-5 ">
                                Update
                            </button>
                            <button onClick={handleDelete} className="btn btn-danger mb-5 ">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProductUpdateDelete;