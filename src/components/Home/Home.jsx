import React, { useState } from "react";
import slogo from '../../assets/logo1.jpg'
import 'animate.css';
import { Link } from "react-scroll";
import shaileshCV from '../../assets/shaileshCV.pdf'

function Home() {


  return (
    <div className="mt-5 bg-bgShade" id= "home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-20 gap-2">
      <div className="md:w-1/2">
       <img src={slogo} alt="" className=" w-full aboutImg animate__animated animate__backInRight  " />
    </div>
            <div className="md:w-1/2 w-full mt-5">
                {/* <h2 className="text-xl text-headingColor font-semibold mb-5">Hey, I am Shailesh</h2> */}
                <h1 className="md:text-6xl text-4xl font-bold text-headingColor leading-sung 
                md:leading-[76px] mb-5 ">Namaste, I am <h1 className="text-primary animate__animated animate__bounceInLeft animate__slower	3s"> <h1 className=" animate-pulse"> Shailesh Shrestha</h1> </h1></h1>
                <p className="text-body text-xl leading-9 mb-8">A passionate frontend developer with a knack for crafting beautiful and user-friendly digital experience.Based in Kathmandu, Nepal. With a background in Computer Science and Information Technology.</p>
 
                <a href={shaileshCV}><button className="btn-primary text-2xl">Get in Touch</button> </a>
                  </div>
         
        </div>
        
    </div>

    
  );
}

export default Home;
