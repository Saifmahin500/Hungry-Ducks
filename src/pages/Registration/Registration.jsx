import { Link } from "react-router-dom";


const Registration = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" w-1/2 mr-12">

                        <img src="https://i.ibb.co/YR4G7Md/31351014-ycay-n3m9-220806-removebg-preview.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form  className="card-body">
                            <h1 className="text-5xl  font-bold text-center">SignUp <span className="text-[#53ec62]">Now!</span> </h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="UserName" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6 ">
                                <input className="btn bg-[#53ec62] font-bold" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-center font-bold my-4">You already Login in this Website?
                            <Link to={"/login"}><span className="text-[#53ec62]"> Login</span> here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;