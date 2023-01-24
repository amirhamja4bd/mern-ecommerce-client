import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Jumbotron from '../components/cards/Jumbotron';
import ProductCard from '../components/cards/ProductCard';
import { useAuth } from '../context/Auth';


const HomePage = () => {
    const [auth, setAuth ] = useAuth()
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        loadProducts();
    },[])

    const loadProducts = async () => {
        try{
            const { data } = await axios.get('/products');
            setProducts(data);
        }
        catch(error){
            console.log(error);
        }
    }

    const arr = [...products];
    const sortedBySold = arr?.sort((a, b) => (a.sold < b.sold ? 1 : -1));

    return (
        <div className=''>
            <Jumbotron title="Home Page" />
            {/* <pre>{JSON.stringify(auth , null, 4)}</pre> */}
            <section>
                <h2 className="p-3 mt-2 mb-2 mx-3 display-6 bg-light"> New Arrivals </h2>
                <div className="row p-3 pt-0">
                    {products?.map((p)=>(
                        <div key={p._id} className="col-md-3 ">
                            <ProductCard p={p} />
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="p-3 mt-2 mb-2 mx-3  display-6 bg-light"> Best Selling </h2>
                <div className="row p-3 pt-0">
                    {sortedBySold?.map((p)=>(
                        <div key={p._id} className="col-md-3 ">
                            <ProductCard p={p} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;