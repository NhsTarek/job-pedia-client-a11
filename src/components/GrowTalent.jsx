import icon1 from "../assets/icons/talent-dot-1.png"
import icon2 from "../assets/icons/talent-dot-2.png"
import icon3 from "../assets/icons/talent-dot-3.png"
import { IoBagCheckSharp } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { BsBuilding } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";




const GrowTalent = () => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row gap-10 p-2 items-center justify-center font-poppins my-10">
            <motion.div 
             variants={fadeIn("left", 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.5 }}
            
            
            className="space-y-5">
                <h2 className="hover:text-blue-600 font-bold">Grow Talent</h2>
                <h2 className="text-5xl font-bold">Grow Your Career, Dream<br />
                    Your Jobs Are Waiting</h2>
                <div className="flex gap-5 my-5 items-center">
                    <div>
                        <img src={icon1} alt="" />
                    </div>
                    <div className="font-bold text-xl">
                        <h2>Full & Part-Time Jobs</h2>
                    </div>
                </div>
                <div className="flex gap-5 my-5 items-center">
                    <div>
                        <img src={icon2} alt="" />
                    </div>
                    <div className="font-bold text-xl">
                        <h2>Employee & Freelance</h2>
                    </div>
                </div>
                <div className="flex gap-5 my-5 items-center">
                    <div>
                        <img src={icon3} alt="" />
                    </div>
                    <div className="font-bold text-xl">
                        <h2>Flexible On-Site</h2>
                    </div>
                </div>
                <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Post A Job
                </button>
            </motion.div>
            <motion.div 
               variants={fadeIn("right", 0.3)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.5 }}
            
            
            className="rounded-t-lg shadow-xl border bg-white p-5 font-poppins">
                <div className="bg-[#c4c4f0]  text-2xl p-5 my-5 rounded-l-lg">
                    <h2>JobPedia Site Status</h2>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <div className="stats stats-vertical gap-5 shadow">

                            <div className="stat my-5 font-poppins hover:bg-slate-300">
                                <div className="stat-value text-5xl text-blue-600"><IoBagCheckSharp /></div>
                                <div className="stat-title text-3xl text-black ">10,523</div>
                                <div className="stat-desc text-black text-base font-bold">Jobs Added</div>
                            </div>

                            <div className="stat p-5 hover:bg-slate-300">
                            <div className="stat-value text-5xl text-blue-600"><CgNotes /></div>
                                <div className="stat-title text-3xl text-black ">20,537</div>
                                <div className="stat-desc text-black text-base font-bold">Resume</div>
                            </div>

                         

                        </div>
                    </div>
                    <div>
                        <div className="stats stats-vertical shadow">

                            <div className="stat my-7 hover:bg-slate-300">
                            <div className="stat-value text-5xl text-blue-600"><BsBuilding /></div>
                                <div className="stat-title text-3xl text-black ">103,843</div>
                                <div className="stat-desc text-black text-base font-bold">Companies</div>
                            </div>

                            <div className="stat p-8 hover:bg-slate-300">
                            <div className="stat-value text-5xl text-blue-600"><FaPeopleGroup /></div>
                                <div className="stat-title text-3xl text-black ">23,510</div>
                                <div className="stat-desc text-base text-black font-bold">members</div>
                            </div>

                           

                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default GrowTalent;