import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ljd1kvp", "template_mands7f", form.current, "DhP6Um0RKnuiEWLd6")
      .then((result) => {
          console.log(result.text);
          alert("Your message has been sent successfully. I will contact you soon.")
      }, (error) => {
          console.log(error.text);
      })
    };


  return (
    <div className="lg:px-12 px-4 " id='contact'>
         <div className = "text-headingColor text-center mb-20">
        <p className='text-xl font-semibold mb-5'>Contact</p>
        <h2 className='md:text-5xl text-4xl font-bold'>Contact Me</h2>
        <p>Provide your details for contact me.</p>
      </div>
    
      <div className="md:w-2/3 mx-auto mb-20">
        <form action="" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label htmlFor="fName" className="text-base text-headingColor w-full ">First name</label>
              <input type="text" name="user_name" id="user_name" onChange={(e)=> setUser_name(e.target.value)} className="block border border-primary rounded-lg py-2 mt-2 w-full"/>
            </div>
            <div className="sm:w-1/2 w-full">
              <label htmlFor="lName" className="text-base text-headingColor w-full ">Last name</label>
              <input type="text" name="user_lastname" id="user_lastname" className="block border border-primary rounded-lg py-2 mt-2 w-full"/>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label htmlFor="email" className="text-base text-headingColor w-full ">Email</label>
              <input type="user_email" name="user_email" id="email" className="block border border-primary rounded-lg py-2 mt-2 w-full"/>
            </div>
            <div className="sm:w-1/2 w-full">
              <label htmlFor="phone" className="text-base text-headingColor w-full ">Phone number</label>
              <input type="text" name="user_phone" id="user_phone" className="block border border-primary rounded-lg py-2 mt-2 w-full"/>
            </div>
          </div>
   
          <div>
            <label htmlFor="message" className="text-base text-headingColor w-full">Message</label>
              <textarea name="message" id="" cols="30" rows="5" placeholder="Type your message here.."
              className="block border border-primary rounded-lg py-2 mt-2 w-full px-2 "></textarea>
          </div>

          <div>
            <input type="checkbox" name="agree" id="agree" />
            <label htmlFor="agree" className="text-base text-headingColor w-full ml-3 items-center ">I accept all the terms.</label>
          </div>

          <div className="w-36 mx-auto mt-8">
            <input type="submit" value= "Send" className="btn-primary bg-primary py-3 px-8 cursor-pointer w-full" />
          </div>

        </form>
      </div>
    </div>
    
  )
}

export default Contact
