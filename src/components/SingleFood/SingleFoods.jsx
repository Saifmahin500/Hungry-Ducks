import { useLoaderData } from "react-router-dom";


const SingleFoods = () => {
    const single = useLoaderData();
    const { name, image, category, price} = single;
    return (
        <div className="max-w-6xl  mx-auto ml-96 my-10">
            <div className="card card-compact w-2/4 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p className=" font-semibold">Category : {category}</p>
                    <p className=" font-semibold">Price : ${price}</p>
                    <p className=" font-semibold">Food Origin: Bangladesh </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio consectetur quas voluptatem aut eum reprehenderit, illum placeat nesciunt voluptates?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success  font-bold">Order now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFoods;