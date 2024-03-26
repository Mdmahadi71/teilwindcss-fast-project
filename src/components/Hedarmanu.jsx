import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhone , } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Hedarmanu = () => {
  return (
    <div className='py-4 bg-hbag'>
      <div className="max-w-container mx-auto">
        <div className="lg:flex">
        <div className="w-full sm:w-full lg:w-1/4">
            <div className="flex items-center lg:justify-start justify-center text-white gap-2 font-poppen relative lg:after:absolute lg:after:top-0
             lg:after:right-[25px] lg:after:content-[''] lg:after:h-[20px] lg:after:w-[2px] lg:after:bg-[red]">
            <CiMail/>
            <p className='font-size'>mail@yourcompany.com</p>
            </div>
        </div>
        <div className="w-full sm:w-full lg:w-1/4">
          <div className="flex items-center lg:justify-start justify-center text-white gap-2 font-poppen">
          <FaPhone />
            <p>+896 120 5889 (Toll free)</p>
          </div>
        </div>
        <div className="w-full sm:w-full lg:w-1/2  ">
             <div className="flex lg:justify-end justify-center text-white gap-5 font-poppen">  
               <FaFacebookSquare />
              <FaTwitter/>
              <FaInstagramSquare />
              <FaLinkedin />
              </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hedarmanu
