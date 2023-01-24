import React from 'react';
import moment from "moment";

const ProductCard = ({p}) => {
    return (
        <div>
            <div className="card ">
                <img
                    className='rounded-top'
                    src={`${process.env.REACT_APP_API}/product/photo/${p._id}`}
                    alt={p.name}
                    style={{ height: "200px", objectFit: "cover" }}
                />
                <div className='p-3'>
                    <h5>{p.name}</h5>
                    <div className=' d-flex justify-content-between'>
                        <p className='btn btn-dark btn-sm'>{moment(p.createdAt).fromNow()}</p>
                        <p className='btn btn-dark btn-sm'>{p.sold} sold</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;