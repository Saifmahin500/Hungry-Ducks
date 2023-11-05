import { Link } from "react-router-dom";


const FoodItemsCard = ({ foodItem }) => {
    const { _id,name, image, category, price } = foodItem;
    return (
        <div>
             <div className="card w-96 bg-base-200  ">
                <figure><img src={image} className="w-full h-[276px]" alt="food" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold ">{name}</h2>
                    <p className="font-medium">Category : {category}</p>
                    <p className="text-lg font-semibold">Price : ${price}</p>
                    <div className="card-actions justify-center mt-4">
                        <Link to={`/singleFoods/${_id}`}>
                        <button className="btn bg-[#53ec62] font-bold text-white">Show Details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodItemsCard;