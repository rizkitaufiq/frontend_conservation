import User1 from "../assets/content/user-real-1.jpg"
import User2 from "../assets/content/user-real-2.jpg"
import User3 from "../assets/content/user-real-3.jpg"
import {motion} from "framer-motion"
import { fadeIn } from "../variants"
const Contact = () => {
    return (
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="contact">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 
            md:w-11/12 mx-auto">
                <div className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:-translate-y-4 
                transition-all duration-300 cursor-pointer">
       
                    <div className="flex items-center justify-center">
                        <img src={User1} alt="" className="lg:h-[200px] lg:w-[220px]" />
                    </div>
                    <h5 className="text-2xl font-semibold text-primary text-center my-2">
                    Chief Executive Officer</h5>
                    <p className="text-secondary text-justify my-2">A common form of lorem ipsum reads:Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, </p>
                    </div>

                <div className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:-translate-y-4 
                transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-center">
                        <img src={User2} alt="" className="lg:h-[200px] lg:w-[220px]" />
                    </div>
                    <h5 className="text-2xl font-semibold text-primary text-center my-2">
                    Human resource development</h5>
                    <p className="text-secondary text-justify my-2">A common form of lorem ipsum reads:Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, </p>
                </div>

                <div className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:-translate-y-4 
                transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-center">
                        <img src={User3} alt="" className="lg:h-[200px] lg:w-[220px]" />
                    </div>
                    <h5 className="text-2xl font-semibold text-primary text-center my-2">
                    Technology</h5>
                    <p className="text-secondary text-justify my-2">A common form of lorem ipsum reads:Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, </p>
                </div>
            </div>
            
            <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} 
                viewport={{once:false, amount: 0.7}} className="mt-10 md:w-11/12 mx-auto flex items-center justify-center">
                <button className="btnPrimary">Message</button>
            </motion.div>
        </div>
    );
};

export default Contact;