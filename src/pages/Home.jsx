import Navbar from "../components/navbar"
import Banner from "../shared/Banner"
import News from "./News"
import Service from "./Service"
import Contact from "./Contact"
import Explorer from "../assets/content/explorer-no_bg-2.png"
import '../App.css'

const Home = () => {

    return (
        <>
            <Navbar/>
            <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
                <Banner banner={Explorer} heading={"Conservation Area"} subheading="Conservation refers to the 
                careful and sustainable use, preservation, and protection of natural resources, environment, or 
                cultural heritage to ensure their continued existence for future generations." 
                button="Get Started"/>
            </div>
            <News/>
            <Service/>
            <Contact/>
        </>
    )

}

export default Home
