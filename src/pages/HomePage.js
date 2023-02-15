import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import Index from '../components/cards/Demo';
import Jumbotron from '../components/cards/Jumbotron';
import ProductCard from '../components/cards/ProductCard';
import { useAuth } from '../context/Auth';
import "pure-react-carousel/dist/react-carousel.es.css";
import "./home.css";

const HomePage = () => {
    const [auth, setAuth ] = useAuth()
    const [products, setProducts] = useState([]);

    const [listProducts, setListProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        loadProducts();
        loadListProducts();
        getTotal();
    },[])

    //Load more
    useEffect(() => {
        if (page === 1) return;
        loadMore();
      }, [page]);

      // Get Total
      const getTotal = async () => {
        try {
          const { data } = await axios.get("/products-count");
          setTotal(data);
        } catch (err) {
          console.log(err);
        }
      };

    //All Products
    const loadProducts = async () => {
        try{
            const { data } = await axios.get('/products');
            setProducts(data);
        }
        catch(error){
            console.log(error);
        }
    }

    // List Products per page
    const loadListProducts = async () => {
        try{
            const { data } = await axios.get(`/list-products/${page}`);
            setListProducts(data);
        }
        catch(error){
            console.log(error);
        }
    }

    // Load more
    const loadMore = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get(`/list-products/${page}`);
          setListProducts([...listProducts, ...data]);
          setLoading(false);
        } catch (err) {
          console.log(err);
          setLoading(false);
        }
      };

// Carousel
    let newP = document.querySelector('.new-product');
    let sell = document.querySelector('.bestSellProduct');

    const btnprev = () => {
        let width = newP.clientWidth;
        newP.scrollLeft = newP.scrollLeft - width;
        console.log(width)
    }

    const btnnext = () => {
        let width = newP.clientWidth;
        newP.scrollLeft = newP.scrollLeft + width;
        console.log(width)
    }

    const sellbtnprev = () => {
        let width = sell.clientWidth;
        sell.scrollLeft = sell.scrollLeft - width;
        console.log(width)
    }

    const sellbtnnext = () => {
        let width = sell.clientWidth;
        sell.scrollLeft = sell.scrollLeft + width;
        console.log(width)
    }

    //Best selling products
    const arr = [...products];
    const sortedBySold = arr?.sort((a, b) => (a.sold < b.sold ? 1 : -1));

    return (
        <div className=''>
            <Jumbotron title="Home Page" />
            {/* <pre>{JSON.stringify(auth , null, 4)}</pre> */}

            <section>
                <div className="product-carousel mx-3">
                    <h2 className="mt-2 display-6 mx-3 px-2 bg-light"> New Arrivals </h2>

                    <button className="pre-btn" onClick={btnprev}><i className="fa-solid fa-chevron-left bg-dark text-light fs-1 py-1 px-2 rounded"></i></button>
                    <button className="next-btn" onClick={btnnext}><i className="fa-solid fa-chevron-right bg-dark text-light fs-1 py-1 px-2 rounded"></i></button>

                    <div className="new-product pb-5 ">
                        {products?.map((p)=>(
                            <div key={p._id} className="col-md-3">
                                <ProductCard p={p} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section>
                <div className="product-carousel mx-3 mt-3">
                    <h2 className="mt-2 display-6 mx-3 px-3 bg-light"> Best Selling </h2>

                    <button className="pre-btn" onClick={sellbtnprev}><i className="fa-solid fa-chevron-left bg-dark text-light fs-1 py-1 px-2 rounded"></i></button>
                    <button className="next-btn" onClick={sellbtnnext}><i className="fa-solid fa-chevron-right bg-dark text-light fs-1 py-1 px-2 rounded"></i></button>

                    <div className="bestSellProduct pb-5">
                        {sortedBySold?.map((p)=>(
                            <div key={p._id} className="col-md-3">
                                <ProductCard p={p} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <h2 className="mt-2 display-6 mx-5 px-2 bg-light"> All Products </h2>
                <div className="row pb-5  mx-5">
                        {listProducts?.map((p)=>(
                            <div key={p._id} className="col-md-3">
                                <ProductCard p={p} />
                            </div>
                        ))}
                    </div>
            </section>

            <div className="container text-center ">
            
                {listProducts && listProducts.length < total && (
                <div className='divider'>
                <div class="dividermask"></div> 
                <button
                    className="btn btn-warning btn-lg col-md-6 pt-1 text-center"
                    disabled={loading}
                    onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                    }}
                >
                    {loading ? "Loading..." : "Load more"}
                </button>
                </div>
                )}
            </div>

        </div>
    );
};

export default HomePage;