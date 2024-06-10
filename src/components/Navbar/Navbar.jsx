import "./Navbar.css";
import logo from "../../assets/logo.png"
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      window.scrollY >500 ? setSticky(true) : setSticky(false)
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu? '': 'hide-mobile-menu'}>
        <li><Link to = 'hero' smooth = {true} offset={0} duration={500}>Home </Link></li>
        <li><Link to = 'projects' smooth = {true} offset={-260} duration={500}>Projects </Link></li>
        <li><Link to = 'about' smooth = {true} offset={-150} duration={500}>About Me </Link></li>
        <li><Link to = 'skills' smooth = {true} offset={-260} duration={500}>Skills </Link></li>
        <li><Link to = 'photography' smooth = {true} offset={-200} duration={500}>Photography</Link></li>
        <li><Link to = 'testimonials' smooth = {true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><button className="btn"><Link to='contact' smooth={true} offset={-260} duration= {500}> Contact Me</Link></button></li>
      </ul>

      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />

    </nav>
  )
}

export default Navbar
