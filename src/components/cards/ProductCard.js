import React from 'react';
import moment from "moment";
import { Badge } from "antd";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/Cart';
import { toast } from 'react-hot-toast';

const ProductCard = ({p}) => {

    const navigate = useNavigate();

    const [cart, setCart ] = useCart();

    function addToCart (p){
        if(cart?.length >= 1){
            let checkExit = cart.some((item)=> item?._id === p?._id);
            if(!checkExit){
                setCart([ ...cart, p]);
                localStorage.setItem("cart", JSON.stringify([ ...cart, p]));
                toast.success("product Added to Cart");
            }
            else{
                toast.error("Product Already added");
            }
        }
        else{
            setCart([...cart, p]);
            localStorage.setItem("cart", JSON.stringify([ ...cart, p]));
            toast.success("product Added to Cart");
        }
    }

    return (
        <div>
            <div className="card mx-2 mb-5 my-card">
            <Badge.Ribbon text={`${p?.sold} sold`} color="red">
                <Badge.Ribbon
                text={`${p?.stock >= 1
                    ? `${p?.stock - p?.sold} in stock`
                    : "Out of stock"
                    }`}
                placement="start"
                color="green"
                >
                    <img
                        className='rounded-top w-100'
                        src={`${process.env.REACT_APP_API}/product/photo/${p._id}`}
                        alt={p?.name}
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                </Badge.Ribbon>
            </Badge.Ribbon>
                <div className=' card-body px-3 pb-0'>
                    <h5>{p?.name}</h5>
                    <p className="card-text">{p?.description?.substring(0, 60)}{p?.description?.length>60 ? ('...'): ('')}</p>
                    <h4 className="">
                        {p?.price?.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                        {/* {p?.price?.toLocaleString("en-BD", {
                            style: "currency",
                            currency: "BDT",
                        })} */}
                    </h4>
                </div>
                    <div className=' p-3 d-flex justify-content-between'>
                        <button onClick={() => navigate(`/product/${p.slug}`)} className='btn btn-primary ' style={{fontSize:"14px"}}>View Product</button>
                        <button 
                            // onClick={()=>{
                            // setCart([...cart, p]);
                            // localStorage.setItem("cart", JSON.stringify([ ...cart, p]));
                            // toast.success("Added to Cart")
                            // }}
                            onClick={addToCart.bind(this, p)}
                            className='btn btn-outline-primary ' style={{fontSize:"14px"}}>Add to Cart</button>
                        {/* <p className='btn btn-dark my-1 btn-sm'>{moment(p.createdAt).fromNow()}</p>
                        <p className='btn btn-dark my-1 btn-sm'>{p.sold} sold</p> */}
                    </div>
            </div>
        </div>
    );
};

export default ProductCard;

