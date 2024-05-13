import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel";
import JobCategories from "../components/JobCategories";
import GrowTalent from "../components/GrowTalent";



const Home = () => {
 
    return (
        <div>
            <Helmet>
                <title>JobPedia | Home</title>
            </Helmet>
            <Carousel></Carousel>
            <JobCategories></JobCategories>
            <GrowTalent></GrowTalent>
        </div>
    );
};

export default Home;