import React from 'react'
import {Link} from 'react-scroll';

function Bot() {
  return (
    
    <div className=' fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-primary w-16 h-16 flex items-center justify-center rounded-full animate-bounce '>
     <Link to="contact" spy ={true} activeClass="active" smooth={true} offset={-100}>
     <ion-icon name="chatbubble-ellipses"></ion-icon>
     </Link>
    </div>
  )
}

export default Bot