import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Project from "../Projects/Project";
import { MdOutlineCloudDownload } from "react-icons/md";
import "./Navbar.css";

const Navbar = ({ type }) => {
  const menuItems = [
    {
      name:"Home",
      link:<Home/>
    },
    {
      name:"About",
      link:<About/>
    },
    {
      name:"Projects",
      link:<Project/>
    },
    {
      name:"Contact",
      link:<Contact/>
    }
    ];
  
  return (
    <div id="nav">
      <div className="logo">
        <h1>Sangita</h1>
      </div>
      <div id="list">
        <ul>
          {menuItems.map((item) => (
            <li>{item.name}{item.li}</li>
            
          ))}
        </ul>
      </div>
      <div id="shop">
        <button><MdOutlineCloudDownload />Download CV</button>
      </div>
    </div>
  );
};

export default Navbar;
