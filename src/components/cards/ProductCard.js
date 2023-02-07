import React from 'react';
import moment from "moment";
import { Badge } from "antd";

const ProductCard = ({p}) => {
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
                        <button className='btn btn-primary ' style={{fontSize:"14px"}}>View Product</button>
                        <button className='btn btn-outline-primary ' style={{fontSize:"14px"}}>Add to Cart</button>
                        {/* <p className='btn btn-dark my-1 btn-sm'>{moment(p.createdAt).fromNow()}</p>
                        <p className='btn btn-dark my-1 btn-sm'>{p.sold} sold</p> */}
                    </div>
            </div>
        </div>
    );
};

export default ProductCard;

