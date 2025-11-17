import About from "./About/About"
import Contact from "./Contact/Contact"
import Home from "./Home/Home"
import Navbar from "./Navbar/Navbar"
import Project from "./Projects/Project"
import "./Portfolio.css"
import Footer from "./Footer/Footer"
import Skill from "./Skill/Skill"

const Portfolio=()=>{
    return(
        <div id="portfolio">
            <Navbar/>
            <Home/>
            <About/>
            <Skill/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default Portfolio