import Service1 from "../assets/content/service-1.gif"
import {motion} from "framer-motion"
import { fadeIn } from "../variants"
const Service = () => {
    return (
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="service">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <motion.div variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.7}} className="md:w-1/2">
                    <img src={Service1} alt="" />
                </motion.div>

                <div className="md:w-2/5">
                    <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
                    We provide services</h2>
                    <p className="text-secondary text-lg mb-7">We will serve you in observation in the area with an unforgettable experience</p>
                    <button className="btnPrimary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Service;