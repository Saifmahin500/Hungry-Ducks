import { Link } from "react-router-dom";


const Menu = ({menu}) => {
    const {_id,name,image,category,price} = menu;
    return (
        <div>
            <div className="card w-96 bg-base-200  ">
                <figure><img src={image} className="md:w-full md:h-[276px]" alt="food" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-semibold ">{name}</h2>
                    <p className="font-medium">Category : {category}</p>
                    <p className="text-xl font-semibold">Price : ${price}</p>
                    <div className="card-actions justify-center mt-4">
                        <Link to={`/singleFood/${_id}`}>
                        <button className="btn bg-[#53ec62] font-bold">Show Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;