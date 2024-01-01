import React from "react";
import { FaGithub, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";


function Footer() {
  return (
    // <div className="bg-bgShade py-2 md:px-12 px-4">
    //   <div className="mx-auto w-full max-w-screen-xl p-9 py-6 lg:py-4">
    //     <div className="md:flex md:justify-between">
    //       <a href="">
    //         <img src="{logo}" alt="logo" />
    //       </a>  
    //       <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
    //         <div>
    //           <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
    //             Resources
    //           </h2>
    //           <ul className="text-gray-500 font-medium" />
    //           <li className="mb-4">
    //             <a href="/" className="hover:underline">
    //               Home
    //             </a>
    //           </li>
    //           <li className="mb-4">
    //             <a href="/about" className="hover:underline">
    //               Skills
    //             </a>
    //           </li>
    //           <li className="mb-4">
    //             <a href="/about" className="hover:underline">
    //               About
    //             </a>
    //           </li>
    //           <li className="mb-4">
    //             <a href="/about" className="hover:underline">
    //               Portfolio
    //             </a>
    //           </li>
    //           <li className="mb-4">
    //             <a href="/about" className="hover:underline">
    //               Photography
    //             </a>
    //           </li>
    //         </div>
    //         <div>
    //           <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
    //             Follow us
    //           </h2>
    //           <ul className="text-gray-500 font-medium" />
    //           <li className="mb-4">
    //             <a href="https://github.com/Shailesh1Shrestha"> Github
    //             </a>
    //           </li>
    //           <li className="mb-4">
    //             <a href="https://www.youtube.com/channel/UCUBpKrn0GZzbRUZlP5kzTHw" className="hover:underline">
    //               Youtube
    //             </a>
    //           </li>
    //           <li className="mb-4">
    //             <a href="https://www.facebook.com/profile.php?id=100025225284094" className="hover:underline">
    //               Facebook
    //             </a>
    //           </li>
    //           <li className="mb-4">
    //             <a href="https://www.instagram.com/shailesh_shrestha21/" className="hover:underline">
    //               Instagram
    //             </a>
    //           </li>
    //         </div>
    //         <div>
    //           <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
    //             Legal
    //           </h2>
    //           <ul className="text-gray-500 font-medium" />
    //           <li className="mb-4">
    //             <a href="#" className="hover:underline">
    //               Privacy Policy
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:underline">
    //               Terms &amp; Conditions
    //             </a>
    //           </li>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </div>


    <div className="bg-bgShade py-10 md:px-12 px-4 ">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-20">
        <a href=""className="flex-shrink-0">
          {/* <img src={logo} alt="logo" className="w-15 h-14 hover:-translate-y-3"/> */}
          <h3 className=" font-roboto text-4xl hover:-translate-y-3 ">
            SH<span className="text-primary">AILE</span>SH  
          </h3>
          </a>
        <div className="flex flex-col sm:flex-row md:items-center gap-1 flex-wrap ">
        <Link to="home" spy ={true} activeClass="active" smooth={true} offset={-100}>
          <a href="/" className="block hover:text-gray-400 py-2 px-4">Home</a>
          </Link>
          <Link to="skills" spy ={true} activeClass="active" smooth={true} offset={-100}>
          <a href="/" className="block hover:text-gray-400 py-2 px-4">Skills</a>
          </Link>
          <Link to="about" spy ={true} activeClass="active" smooth={true} offset={-100}>
          <a href="/" className="block hover:text-gray-400 py-2 px-4">About Me</a>
          </Link>
          <Link to="portfolio" spy ={true} activeClass="active" smooth={true} offset={-100}>
          <a href="/" className="block hover:text-gray-400 py-2 px-4">Portfolio</a>
          </Link>
          <Link to="photography" spy ={true} activeClass="active" smooth={true} offset={-100}>
          <a href="/" className="block hover:text-gray-400 py-2 px-4">Photography</a>
          </Link>
        </div>
        <div className="flex items-center gap-4 ">
          <a href="https://github.com/Shailesh1Shrestha">
          <FaGithub className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary"/>
          </a>
          <a href="https://www.youtube.com/channel/UCUBpKrn0GZzbRUZlP5kzTHw">
          <FaYoutube className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary"/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100025225284094">
          <FaFacebookF className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary"/>
          </a>
          <a href="https://www.instagram.com/shailesh_shrestha21/">
          <FaInstagram className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary"/>
          </a>
        </div>
      </div>
      <hr />
      <div className="mt-10 flex flex-col md:flex-row justify-between gap-8">
        <p>Made with  💖 in Nepal</p>
        <span className="text-sm text-gray-500 sm:text-center">
            © 2023  
            <a href="https://shresthashailesh.com.np/" className="hover:underline hover:text-primary">
               shresthashailesh.com.np
            </a>
            . All Rights Reserved.
            
          </span>
        <div className="space-x-6">
          <a href="/" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/" className="hover:text-gray-400">Terms of Service</a>
          <a href="/" className="hover:text-gray-400">Cookies Settings</a>
        </div>
      </div>
    </div>

  );
}

export default Footer;
