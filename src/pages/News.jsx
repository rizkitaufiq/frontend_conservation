import Explorer1 from "../assets/content/explorer-1.png"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"
const News = () => {
    return (
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="news">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }} className="lg:w-1/4 text-justify">
                    <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">Outdoor Activities</h3>
                    <p>Nature explorers often partake in outdoor activities such as hiking, camping,
                        birdwatching, wildlife observation, stargazing, photography, or simply taking nature
                        walks to connect with and explore the environment.</p>
                </motion.div>

                <div className="w-full lg:w-3/4">
                    <div className="grid md:grid-cols-3 sm:grid-cols-1 items-start md:gap-8 gap-8">
                        <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-98 shadow-3xl p-8 items-center
                            flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}>
                                <img src={Explorer1} alt="" className="lg:h-[280px] lg:w-[430px]" />
                                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-4">
                                    Environmental Education</h5>
                            </motion.div>
                        </div>

                        <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-98 shadow-3xl p-8 items-center
                        flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer
                        md:mt-16">
                            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}>
                                <img src={Explorer1} alt="" className="lg:h-[280px] lg:w-[430px]" />
                                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-4">
                                    Curiosity and Learning</h5>
                            </motion.div>
                        </div>

                        <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-98 shadow-3xl p-8 items-center
                        flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer
                        md:mt-8">
                            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}>
                                <img src={Explorer1} alt="" className="lg:h-[280px] lg:w-[430px]" />
                                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-4">
                                    Research and Documentation</h5>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;