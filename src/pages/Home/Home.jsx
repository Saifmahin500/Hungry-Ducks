import Banner from "../../components/Banner/Banner";
import HomeMenu from "../../components/HomeMenu/HomeMenu";
import Team from "../../components/Team/Team";
import Testimonials from "../../components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div className="max-6xl mx-auto">
            <Banner></Banner>
            <HomeMenu></HomeMenu>
            <Testimonials></Testimonials>
            <Team></Team>
        </div>
    );
};

export default Home;