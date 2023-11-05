import { useEffect, useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";


const HomeMenu = () => {
    const [menus, setMenus] = useState([])

    useEffect(() => {
        fetch('http://localhost:5500/foodItems')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4">
                <h1 className="text-green-400 font-bold">Special Dishes</h1>
                <h2 className="text-5xl font-bold">Standout Dishes <br /> From Our Menu</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                {
                    menus.map(menu => <Menu key={menu.price} menu={menu}></Menu>)
                }
            </div>
            <div className="text-center my-5">
                <Link to={"/allMenus"}><button className=" btn btn-outline  text-black font-bold ">See All Menus</button></Link>
            </div>
        </div>
    );
};

export default HomeMenu;