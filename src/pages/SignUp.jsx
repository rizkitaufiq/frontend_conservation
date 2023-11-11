import NavbarSubmenu from "../components/NavbarSubmenu"
import Service1 from "../assets/content/service-1.gif"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"

const SignUp = () => {
    return (
        <div>
            <NavbarSubmenu />
            <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="service">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <motion.div variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="md:w-1/2">
                        <img src={Service1} alt="" />
                    </motion.div>

                    <div className="md:w-2/5 ">
                        <div className="w-full flex flex-col max-w-[430px]">
                            <div className="flex justify-center item-center">
                                <h2 className="md:text-3xl font-bold text-primary leading-normal">
                                    Create Your Account!</h2>
                            </div>
                            <div className="flex justify-center">
                                <p className="text-secondary mb-5">Please enter your details.</p>
                            </div>
                            <form action="">
                                <div className="mt-6 w-full flex mb-5">
                                    <div className="relative mt-6">
                                        <input name="firstname" id="firstname" type="text" placeholder="First Name" className="font-sans text-secondary peer mt-1 w-full border-b-2 border-tertiary px-0 py-1 placeholder:text-transparent focus:border-primary focus:outline-none" />
                                        <label htmlFor="firstname" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-primary opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 
                                        peer-focus:text-lg peer-focus:text-primary peer-focus:font-semibold">First Name</label>
                                    </div>
                                    <div className="relative mt-6 ml-16">
                                        <input name="lastname" id="lastname" type="text" placeholder="Last Name" className="font-sans text-secondary peer mt-1 w-full border-b-2 border-tertiary px-0 py-1 placeholder:text-transparent focus:border-primary focus:outline-none" />
                                        <label htmlFor="lastname" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-primary opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 
                                        peer-focus:text-lg peer-focus:text-primary peer-focus:font-semibold">Last Name</label>
                                    </div>
                                </div>

                                <div className="relative mt-6">
                                    <input name="birthday" id="birthday" type="date" placeholder="Birthday" autoComplete="NA" className="font-sans text-secondary peer mt-1 w-full border-b-2 border-tertiary px-0 py-1 placeholder:text-transparent focus:border-primary focus:outline-none" />
                                    <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-primary opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 
                                        peer-focus:text-lg peer-focus:text-primary peer-focus:font-semibold" htmlFor="birthday">Birthday</label>
                                </div>

                                <div className="relative mt-6">
                                    <input name="email" id="email" type="text" placeholder="Email Address" autoComplete="NA" className="font-sans text-secondary peer mt-1 w-full border-b-2 border-tertiary px-0 py-1 placeholder:text-transparent focus:border-primary focus:outline-none" />
                                    <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-primary opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 
                                        peer-focus:text-lg peer-focus:text-primary peer-focus:font-semibold" htmlFor="email">Email Address</label>
                                </div>

                                <div className="relative mt-6">
                                    <input name="username" id="username" type="text" placeholder="Username" autoComplete="NA" className="font-sans text-secondary peer mt-1 w-full border-b-2 border-tertiary px-0 py-1 placeholder:text-transparent focus:border-primary focus:outline-none" />
                                    <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-primary opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 
                                        peer-focus:text-lg peer-focus:text-primary peer-focus:font-semibold" htmlFor="username">Username</label>
                                </div>

                                <div className="relative mt-6">
                                    <input name="password" id="password" type="password" placeholder="Password" className="text-secondary font-sans font-semibold peer mt-1 w-full border-b-2 border-tertiary px-0 py-1 placeholder:text-transparent focus:border-primary focus:outline-none" />
                                    <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-primary opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 
                                        peer-focus:text-lg peer-focus:text-primary peer-focus:font-semibold" htmlFor="username">Password</label>
                                </div>

                                <div className="flex justify-center mt-5">
                                    <button type="submit" className="btnPrimary w-full">Submit</button>
                                </div>
                            </form>
                            <div className="flex justify-center w-full mt-8 ">
                                <p>Do you have a account? <a href="/login"><span className="text-secondary font-semibold underline underline-offset-2 cursor-pointer">Login</span></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;