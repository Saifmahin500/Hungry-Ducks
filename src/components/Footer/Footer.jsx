import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <img src="https://i.ibb.co/YR4G7Md/31351014-ycay-n3m9-220806-removebg-preview.png" className="w-[80px]" alt="" />
                <p>Hungry Ducks<br />Providing reliable tech since 2023</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Restaurant</header>
                <Link to={"/"}> <a className="link link-hover">Home</a></Link>
                <Link to={"/allMenus"}> <a className="link link-hover">All Menus</a></Link>
                <Link to={"/blog"}><a className="link link-hover">Blog</a></Link>
                <Link to={"/login"}><a className="link link-hover">Login</a></Link>
               
               
                
                
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;