import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import {Link} from 'react-scroll';
import logo from '../../assets/logo.png'
import "animate.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0  right-0 ">
      <nav className={`py-4 md:px-12 px-4 shadow-md bg-white ${isSticky ? "stickytop-0 right-0 left-0 bg-white": ""}`}>
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="cursor-pointer">
          <Link to="home" spy ={true} activeClass="active" smooth={true} offset={-100}>
          <img src={logo} alt="logo" className=" w-39 h-10 animate__animated w-42 h-12 animate__animated animate__swing  animate__slower	 animate__infinite	infinite " /></Link>
          </div>
          {/* menu items for large device  */}
          <div className=  "lg:flex items-center gap-8 cursor-pointer hidden text-body text-xl ">
            <Link to="home" spy ={true}  smooth={true} offset={-100}
              className={({isActive}) =>`block py-2 pc-4 cursor-pointer text-primary hover:text-gray-500 ${isActive ?"text-primary":"text-gray-700"}`}>
            
              Home
            </Link>
            <Link to="skills" spy ={true} activeClass="active" smooth={true} offset={-100}
              className={({isActive}) =>`block py-2 pc-4 cursor-pointer text-primary hover:text-gray-500 ${isActive ?"text-primary":"text-gray-700"}`}
            >
              Skills
            </Link>

            <Link to="portfolio" spy ={true} activeClass="active" smooth={true} offset={-100}
              className= {({isActive})=>`block py-2 pc-4 cursor-pointer text-primary hover:text-gray-500 ${isActive ?"text-primary":"text-gray-700"}`}
            >
              Portfolio
            </Link>
            <Link to="about" spy ={true} activeClass="active" smooth={true} offset={-100}
              className={({isActive})=>`block py-2 pc-4 cursor-pointer text-primary hover:text-gray-500 ${isActive ?"text-primary":"text-gray-700"}`}
            >
              About Me
            </Link>
            <Link to="photography" spy ={true} activeClass="active" smooth={true} offset={-100}
              className={({isActive})=>`block py-2 pc-4 cursor-pointer text-primary hover:text-gray-500 ${isActive ?"text-primary":"text-gray-700"}`}
            >
              Photography
            </Link>
          </div>

          {/* contact btn */}
          <div className="lg:block hidden text-xl ">
            <Link to= "contact" spy = {true} activeClass="actice" smooth={true} offset={-100}> <button className="outlineBtn hover:-translate-x-2">Contact Me</button> </Link>
          </div>
          {/* menubtn for mobile device */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {/* menu items for small devices  */}
        {isMenuOpen && (
          <div className="mt-4 bg-body  rounded-lg text-white">
            <Link to="home"
              className="block py-2 pc-4 cursor-pointer text-primary hover:text-gray-500"
            >
              Home
            </Link>
            <Link to="skills"
              className="block py-2 pc-4 cursor-pointer hover:text-gray-500"
            >
              Skills
            </Link>
            <Link to="about"
              className="block py-2 pc-4 cursor-pointer hover:text-gray-500"
            >
              About Me
            </Link>
            <Link to="portfolio"
              className="block py-2 pc-4 cursor-pointer hover:text-gray-500"
            >
              Portfolio
            </Link>
            <Link to="photography"
              className="block py-2 pc-4 cursor-pointer hover:text-gray-500"
            >
              Photography
            </Link>
            <Link to="contact"
              className="block py-2 pc-4 cursor-pointer hover:text-gray-500"
            >
              Contact Me
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
