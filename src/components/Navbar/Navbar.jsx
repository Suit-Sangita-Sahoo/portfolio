import { useState } from "react";
import { MdOutlineCloudDownload } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skill", id: "skill" },
    { name: "Project", id: "project" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); 
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

       
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide cursor-pointer">
          Sangita
        </h1>

       
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-600 transition"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        
        <button className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          <MdOutlineCloudDownload size={22} />
          Download CV
        </button>

        
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

     
      {open && (
        <ul className="md:hidden bg-white shadow-lg px-5 pb-4 space-y-4 text-lg font-medium">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-600 transition py-1"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </li>
          ))}

          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition w-full justify-center">
            <MdOutlineCloudDownload size={22} />
            Download CV
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
