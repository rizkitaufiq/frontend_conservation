import triangle from "../assets/logo/triangle.jpg"
import { useState, useEffect, useRef } from "react"
import { GrLanguage } from "react-icons/gr"
import { FaBars, FaXmark } from "react-icons/fa6"

const NavbarSubmenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    let MenuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!MenuRef.current.contains(e.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);
    });

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        { link: "Home", path: "/home" },
        { link: "News", path: "/home" },
        { link: "Service", path: "/home" },
        { link: "Contact", path: "/home" },
    ]
    return (
        <>
            <div>
            <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed 
            top-0 right-0 left-0">
                <div className="text-lg container mx-auto flex justify-between items-center font-medium">
                    <div className="flex space-x-14 items-center">
                        <a href="#" className="text-3xl font-semibold flex items-center space-x-2 text-primary">
                            <img src={triangle} alt="" className="w-10 inline-block items-center" />
                            <span>RZK</span>
                        </a>

                        <ul className="md:flex space-x-12 hidden">
                            {
                                navItems.map(({ link, path }) => <a key={link} href={path} className="block hover:text-tertiary cursor-pointer">{link}</a>)
                            }
                        </ul>
                    </div>

                    <div className="space-x-10 hidden md:flex items-center">
                        <div className="flex flex-col relative">
                            <a onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="hidden lg:flex items-center hover:text-tertiary cursor-pointer"><GrLanguage className="mr-2" /><span>Language</span></a>
                            {isDropdownOpen && (
                                <div ref={MenuRef} className="bg-quaternary w-52 shadow-lg absolute ml-4 mt-8">
                                    <ul>
                                        <li onClick={() => setIsDropdownOpen(false)} className="p-2 text-lg cursor-pointer hover:bg-tertiary flex items-center"><img src="https://flagcdn.com/us.svg" width="30" className="mr-2" alt="" /><p>English</p></li>
                                        <li onClick={() => setIsDropdownOpen(false)} className="p-2 text-lg cursor-pointer hover:bg-tertiary flex items-center"><img src="https://flagcdn.com/id.svg" width="30" className="mr-2" alt="" /><p>Indonesia</p></li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <a href="/login" className="hidden lg:flex items-center hover:text-tertiary"><span>Login</span></a>
                        <a href="/signup"><button className="bg-primary py-2 px-4 transition-all duration-300 rounded hover:text-primary hover:bg-tertiary text-white">Sign Up</button></a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toogleMenu} className="text-white focus:outline-none focus:text-gray-300">
                            {
                                isMenuOpen ? (<FaXmark className="w-6 h-6 text-primary" />) : (<FaBars className="w-6 h-6 text-primary" />)
                            }
                        </button>
                    </div>
                </div>
            </nav>

            {
                isMenuOpen ?

                    <div className='space-y-4 px-4 pt-24 pb-5 bg-secondary block fixed top-0 right-0 left-0 md:hidden'>
                        {
                            navItems.map(({ link, path }) => <a key={link} href={path} className="text-white block hover:text-gray-300 cursor-pointer"
                                onClick={toogleMenu}>{link}</a>)
                        }
                    </div>

                    :

                    <div className='space-y-4 px-4 pt-5 pb-5 bg-secondary hidden'>
                        {
                            navItems.map(({ link, path }) => <a key={link} href={path} className="text-white block hover:text-gray-300 cursor-pointer"
                                onClick={toogleMenu}>{link}</a>)
                        }
                    </div>
            }
            </div>
        </>
    );
};

export default NavbarSubmenu;