import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const FoodPurchase = () => {
    const purchase = useLoaderData()
    const { name, price, _id, image } = purchase;
    const {user} = useContext(AuthContext)

    const handlePurchase = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const Price = form.Price.value;
        const Quantity = form.Quantity.value;
        const BuyerName = user?.displayName;
        const email = user?.email;
        const date = form.date.value;

        const Order = {
            FoodName: name,
            price: Price,
            image : image,
            Quantity: Quantity,
            BuyerName: BuyerName,
            BuyerEmail: email,
            Date: date,
            BuyerId: _id
        }
        console.log(Order);

        fetch('http://localhost:5500/purchaseConfirm', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(Order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                toast.success('Your order is successfully done')  
            }
        })
    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-center underline mt-5">Please Confirm Your Food Purchase</h2>
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 my-10">
                <form onSubmit={handlePurchase } className="card-body">
                    <div className="grid grid-col-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Food Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Food Name" className="input font-semibold input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <input type="text" name="Price"  defaultValue={'$'+price} className="input input-bordered font-semibold " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold ">Quantity</span>
                        </label>
                        <input type="text" name="Quantity" placeholder="Quantity" className="input input-bordered font-semibold " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Buyer Name</span>
                        </label>
                        <input type="text" name="BuyerName" readOnly defaultValue={user?.displayName}  className="input input-bordered font-semibold " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Buyer Email</span>
                        </label>
                        <input type="email" readOnly  placeholder="email" defaultValue={user?.email} className="input input-bordered font-bold " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Buying Date</span>
                        </label>
                        <input type="date" name="date"  className="input input-bordered font-semibold " required />
                    </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-block btn-success font-bold" type="submit" value="Purchase Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FoodPurchase;