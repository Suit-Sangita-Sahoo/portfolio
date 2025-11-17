import About from "./About/About"
import Contact from "./Contact/Contact"
import Home from "./Home/Home"
import Navbar from "./Navbar/Navbar"
import Project from "./Projects/Project"
import "./Portfolio.css"
import Footer from "./Footer/Footer"

const Portfolio=()=>{
    return(
        <div id="portfolio">
            <Navbar/>
            <Home/>
            <About/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default Portfolio