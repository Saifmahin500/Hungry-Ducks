import { useEffect, useState } from "react";
import FoodItemsCard from "../../components/foodItemsCard/FoodItemsCard";


const AllFoodItems = () => {
    const [allFoodItems,setAllFoodItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5500/allFoodItems')
        .then(result => result.json())
        .then(data => setAllFoodItems(data))
    },[])
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-5">
        <h2 className="text-5xl font-bold my-5">Our All Food Items</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
            {
                allFoodItems.map(foodItem => <FoodItemsCard key={foodItem.price} foodItem={foodItem}></FoodItemsCard> )
            }
        </div>

        </div>
    );
};

export default AllFoodItems;