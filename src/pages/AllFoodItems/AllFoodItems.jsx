import { useEffect, useState } from "react";
import FoodItemsCard from "../../components/foodItemsCard/FoodItemsCard";
import { useLoaderData } from "react-router-dom";


const AllFoodItems = () => {
    const [allFoodItems,setAllFoodItems] = useState([])
    const {count} = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(9)
    const numberOfPages = Math.ceil(count / itemsPerPage)

    const pages = [...Array(numberOfPages).keys()];


    useEffect(() => {
        fetch(`http://localhost:5500/allFoodItems?page=${currentPage}&size=${itemsPerPage}`)
        .then(result => result.json())
        .then(data => setAllFoodItems(data))
    },[currentPage,itemsPerPage])

   const handlePrePage = () => {
    if(currentPage > 0){
        setCurrentPage(currentPage - 1)
    }
   }
   const handleNextPage = () => {
    if(currentPage < pages.length - 1){
        setCurrentPage(currentPage + 1)
    }
   }

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
        <div className="text-center ">
            <h2>currentPage: {currentPage}</h2>
        <button onClick={handlePrePage} className="join-item btn btn-outline mr-2">Previous page</button>
            {
                pages.map(page => <div key={page} className="join">
                <button onClick={() => setCurrentPage(page)} className="join-item btn">{page}</button>  
              </div>
               )
            }
            <button onClick={handleNextPage} className="join-item btn btn-outline ml-2">Next page</button>
        </div>
      

        </div>
    );
};

export default AllFoodItems;