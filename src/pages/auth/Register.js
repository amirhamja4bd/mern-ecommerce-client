import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Jumbotron from '../../components/cards/Jumbotron';
import { useAuth } from '../../context/Auth';

const Register = () => {

    const [name, setName] = useState("Amir Hamza");
    const [email, setEmail] = useState("amir0@gmail.com");
    const [password, setPassword] = useState("12345678");

    const [auth, setAuth ] = useAuth()

    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            // const { data } = await axios.post(
            //     `${process.env.REACT_APP_API}/register`, {name, email, password,});
            // console.log("----->------>----->", data);
            // if(data?.error){
            //     toast.error(data.error)
            // }

            const { data } = await axios.post(
                `http://localhost:5000/api/v1/register`, {name, email, password,});
            console.log( data);
            if(data?.error){
                toast.error(data.error)
            }

            else{
                localStorage.setItem("auth", JSON.stringify(data));
                setAuth({ ...auth, user: data.user, token: data.token });
                toast.success(" Registration Successful")
                navigate("/")
            }
        }
        catch(error){
            console.log(error);
            toast.error(" Registration Faild. Try again.")
        }
    };


    return (
        
        <div className='text-light'>
            <Jumbotron title="Register Page" />
            <div className="my-5 d-flex justify-content-center align-items-center ">
                <div className="col-md-5 p-4 shadow-sm border rounded-5 border-primary bg-dark">
                    <h2 className="text-center mb-4 text-primary">Register Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 ">
                            <label for="exampleInputName" className="form-label">Name</label>
                            <input 
                                type="text" 
                                className="form-control border border-primary bg-dark text-light"
                                placeholder="Enter your name"
                                id="exampleInputName" 
                                aria-describedby="emailHelp" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoFocus
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input 
                                type="email" 
                                className="form-control border border-primary bg-dark text-light" 
                                placeholder="Enter your email"
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control border border-primary bg-dark text-light" 
                                placeholder="Enter your password"
                                id="exampleInputPassword1" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;



// import React from 'react';
// import Jumbotron from '../../components/cards/Jumbotron';

// const Register = () => {
//     return (
//         <div className='text-light'>
//             <Jumbotron title="Register Page" />
//         </div>
//     );
// };

// export default Register;



