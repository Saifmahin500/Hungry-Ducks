import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle } from 'react-icons/fa';
import toast from "react-hot-toast";


const Login = () => {
    const { GoogleSignIn, signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email,password}
        console.log(user);

        signIn(email,password)
        .then(result => {
            const user = result.user
            console.log(user);
            toast.success('Successfully LogIn!')
            navigate(location?.state ? location?.state : "/" )
        })
        .catch(error => {
            console.log(error);
            toast.error("Password doesn't match");
        })

    }
    const handleGoogle = () => {
        GoogleSignIn()
            .then(() => {
                toast.success('Successfully LogIn!')
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                console.log(error);
                toast.error("Please try again");
            })
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-5xl font-bold text-center"><span className="text-[#53ec62]">Login</span> now!</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="Email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-4">
                                <input className="btn bg-[#53ec62] font-bold" type="submit" value="Login" />
                            </div>
                            
                        </form>
                        
                      <div className="text-center">
                      
                      <button className="btn btn-neutral font-bold"><FaGoogle></FaGoogle><input onClick={handleGoogle}   type="submit" value="Login With Google" /></button>
                        <p className="text-center font-bold my-2">New in Hungry Ducks? <Link to={"/reg"}>Please <span className="text-[#53ec62]">Sign Up</span> </Link></p>
                      </div>
                    </div>
                    <div className=" w-1/2 mr-12">

                        <img src="https://i.ibb.co/YR4G7Md/31351014-ycay-n3m9-220806-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;