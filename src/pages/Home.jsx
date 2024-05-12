import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel";
import JobCategories from "../components/JobCategories";
import { useLoaderData } from "react-router-dom";


const Home = () => {
 
    return (
        <div>
            <Helmet>
                <title>JobPedia | Home</title>
            </Helmet>
            <Carousel></Carousel>
            <JobCategories></JobCategories>
        </div>
    );
};

export default Home;