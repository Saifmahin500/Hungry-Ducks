import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import OrderRow from "./OrderRow";


const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const [myOrder, setMyOrder] = useState([]);


    // const url = `http://localhost:5500/purchaseConfirm?email=${user?.email}`;
    const url = 'http://localhost:5500/purchaseConfirm';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [])
    return (
        <div >
            <h2 className="text-5xl font-bold text-center underline mt-4">My Order List</h2>
            <div className="max-w-6xl mx-auto my-10 ">
                <table className="table">
                <thead className="bg-base-200">
                    <tr className="text-xl font-bold">
                        
                        <th>Buyer Name</th>
                        <th>Food Name</th>
                        <th>price</th>
                     
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                  
                    <tbody>
                    {
                    myOrder.map(order => <OrderRow key={order._id} order={order}></OrderRow>)
                    }
             
                    </tbody>
                  
                  

                </table>
            </div>
        </div>


    );
};

export default MyOrder;