import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel";
import JobCategories from "../components/JobCategories";
import GrowTalent from "../components/GrowTalent";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";




const Home = () => {
 
    return (
        <div>
            <Helmet>
                <title>JobPedia | Home</title>
            </Helmet>
            <Carousel></Carousel>
            <JobCategories></JobCategories>
            <Portfolio></Portfolio>
            <GrowTalent></GrowTalent>
            <Testimonials></Testimonials>
           
        </div>
    );
};

export default Home;