import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import OrderRow from "./OrderRow";
import Swal from "sweetalert2";


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
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

        fetch(`http://localhost:5500/purchaseConfirm/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) =>  {
        console.log(data);
        if (data.deletedCount > 0) {
              Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          const reamingUsers = myOrder.filter(user => user._id !== id)
          setMyOrder(reamingUsers);
            
            
        }
    })
}
})
}
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
                    myOrder.map(order => <OrderRow key={order._id} order={order} handleDelete={handleDelete}></OrderRow>)
                    }
             
                    </tbody>
                  
                  

                </table>
            </div>
        </div>


    );
};

export default MyOrder;