import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyAddItems = () => {
    const[myAddFood,setMyAddFood] = useState([])

    const url = "http://localhost:5500/AddFoodItems";
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyAddFood(data))
    },[])
    return (
        <div>
            <h3 className="text-5xl font-bold text-center underline mt-4">My Added Food List</h3>
          <div>
            {
                myAddFood.map(list => <div key={list} className="card card-side w-1/3 my-10  bg-base-200 shadow-xl">
                <figure><img src={list.image} alt="Movie"/></figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">{list.name}</h2>
                  <p className="font-medium">Price: ${list.price}</p><br />
                  <div className="card-actions justify-center">
                    
                   <Link to={'/update'}>
                   <button  className="btn bg-[#53ec62]"><FaEdit></FaEdit>Update</button>
                   </Link>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>
    );
};

export default MyAddItems;