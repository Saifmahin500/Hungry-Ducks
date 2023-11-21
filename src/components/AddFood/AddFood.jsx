import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const AddFood = () => {
    const {user} = useContext(AuthContext)
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const category = form.category.value;
        const Price = form.Price.value;
        const description = form.description.value;
        const Quantity = form.Quantity.value;
        const Origin = form.Origin.value;
        const BuyerName = form.BuyerName.value;
        const BuyerEmail = form.BuyerEmail.value;
        const FoodItems = {name,image,category,Price,description,Quantity,Origin,BuyerName,BuyerEmail}
        console.log(FoodItems);


        fetch('https://restaurant-website-server-side.vercel.app/AddFoodItems',{
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(FoodItems)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId) {
                Swal.fire(
                    'Good job!',
                    'Your Food is added!',
                    'success'
                )
                
            }
        })
    }
    return (
        <div>
        <h2 className="text-3xl font-bold text-center underline mt-5">Add Food Items Page</h2>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 my-10">
            
            <form onSubmit={handleAddProduct}  className="card-body">
                <div className="grid grid-col-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Food Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Food Name" className="input font-semibold input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Food image</span>
                    </label>
                    <input type="text" name="image"  placeholder="Food Url" className="input font-semibold input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Food Category</span>
                    </label>
                    <input type="text" name="category"  placeholder="Food category" className="input font-semibold input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Price</span>
                    </label>
                    <input type="text" name="Price" placeholder="price" className="input input-bordered font-semibold " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold ">Quantity</span>
                    </label>
                    <input type="text" name="Quantity" placeholder="Quantity" className="input input-bordered font-semibold " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold ">Food Origin</span>
                    </label>
                    <input type="text" name="Origin" placeholder="Country" className="input input-bordered font-semibold " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold ">short description</span>
                    </label>
                    <input type="text" name="description" placeholder="write something" className="input input-bordered font-semibold " required />
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
                    <input type="email" readOnly name="BuyerEmail"  placeholder="email" defaultValue={user?.email} className="input input-bordered font-bold " required />
                </div>
                
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-block bg-[#53ec62] font-bold" type="submit" value="Add Food Items" />
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddFood;