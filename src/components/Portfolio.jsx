import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Portfolio = () => {
    return (
        <section className=" dark:bg-gray-900">
            <div

                className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Why Choose Us?
                </h1>

                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}




                    className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')" }}>
                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                                User Friendly
                            </h2>
                            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                                It is very easy to use jobPedia
                            </p>
                        </div>
                    </div>

                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')" }}>
                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                                Best Job collections
                            </h2>
                            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                                jobPedia has best job collection overall
                            </p>
                        </div>
                    </div>

                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                                Trusted
                            </h2>
                            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                                jobPedia is concern about their users so we verify each & every jobs
                            </p>
                        </div>
                    </div>

                    <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
                        <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                                Huge collection of Categories
                            </h2>
                            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                                We had the largest amount of job categories
                            </p>
                        </div>
                    </div>
            </motion.div>
        </div>
        </section >
    );
};

export default Portfolio;