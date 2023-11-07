import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <img src="https://i.ibb.co/2ckTvqt/Adobe-Stock-562540707-Preview-removebg-preview.png" className="max-w-sm md:max-w-lg " />
                <div>
                    <h1 className="text-5xl font-bold">Indulge Your Taste With <br /> Our Delicious <span className="text-[#53ec62]">Food </span> </h1>
                    <p className="py-6">Where Each Plate Weaves a Story of Culinary <br />Mastery and Passionate Craftsmanship </p>
                    <Link to={"/allMenus"}>
                    <button className="btn bg-[#53ec62] font-bold">See All Menus</button>
                    </Link>
                    <button className="btn btn-outline ml-4 font-bold">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;