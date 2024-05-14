import { Link } from "react-router-dom";
import blogImg1 from "../assets/images/How-a-refresh-token-is-generated-and-used-1.png"
import blogImg2 from "../assets/images/blog2.png"



const Blogs = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Blogs</h1>
                        <button className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    <hr className="my-8 border-gray-200 dark:border-gray-700" />
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        <div>
                            <img className=" object-center w-full h-64 rounded-lg lg:h-80" src={blogImg1} alt="" />
                            <div className="mt-8">
                                <span className="text-blue-500 uppercase">MongoDB & Jwt</span>
                                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">What is an access token and refresh token & how they work?</h1>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    Access tokens and refresh tokens are both used in authentication systems, particularly in scenarios involving token-based authentication such as OAuth 2.0.</p>
                                <div className="flex items-center justify-between mt-4">
                                    <div>
                                        <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">John snow</a>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">February 1, 2022</p>
                                    </div>
                                    <Link to='/blog-one' className="inline-block text-blue-500 underline hover:text-blue-400">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className=" object-center w-full h-64 rounded-lg lg:h-80" src={blogImg2} alt="" />
                            <div className="mt-8">
                                <span className="text-blue-500 uppercase">Frameworks</span>
                                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">What is express & Nest js.What are their features and how they work?</h1>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. </p>
                                <div className="flex items-center justify-between mt-4">
                                    <div>
                                        <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">John snow</a>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">February 1, 2022</p>
                                    </div>
                                    <Link to='/blog-two' className="inline-block text-blue-500 underline hover:text-blue-400">Read more</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;