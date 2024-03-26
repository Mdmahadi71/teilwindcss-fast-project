import React from 'react'
import ftrimg from '../assets/footerimg.png'
import { CiMail } from "react-icons/ci";
import { FaPhone    } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationPinLock } from "react-icons/fa6";
import certOne from '../assets/Cert1.png'
import certTwo from '../assets/Cert2.png'


const Footer = () => {
  return (
    <>
    <div className='bg-[#000000] py-[100px]'>
      <div className="max-w-container mx-auto">
        <div className="lg:flex justify-between">
            <div className="lg:w-[30%] w-full items-center justify-center text-center py-4">
                  <div className="">
                             <img src={ftrimg} alt="" />
                 <div className=" mt-[30px]">
                 <div className="flex text-white mt-3">
                    < CiMail/>
                  <p className='text-white font-poppen font-semibold text-[14px]'>mail@yourcompany.com</p>
                </div>
                <div className="flex text-white mt-3">
                  <FaPhone/>
                  <p className='text-white font-poppen font-semibold text-[14px]'>+896 120 5889 (Toll free)</p>
                </div>
                <div className="flex text-white mt-3">
                  <FaLocationPinLock/>
                  <p className='text-white font-poppen font-semibold text-[14px]'>101 Baker Street, New York, USA, 12345</p>
                </div>
                <div className="flex gap-2 text-[#F40404] mt-3">
                  <FaFacebookSquare/>
                  <FaTwitter/>
                  <FaInstagram/>
                  <FaLinkedinIn />
                </div>
                 </div>
                  </div>

            </div>
            <div className="lg:w-[70%] lg:py-4 py-2">
                <div className="flex justify-between ">
                  <div className="">
                    <ul>
                      <p className='text-white font-bold font-poppen lg:text-[20px] text-[16px'>Company</p>
                      <li className='mt-[10px]'><a className='text-white font-poppen font-semibold lg:text-[16px] text-[14px]' href="#">Home</a></li>
                      <li className='mt-[10px]'><a className='text-white font-poppen font-semibold lg:text-[16px] text-[14px]' href="#">About</a></li>
                      <li className='mt-[10px]'><a className='text-white font-poppen font-semibold lg:text-[16px] text-[14px]' href="#">Services</a></li>
                      <li className='mt-[10px]'><a className='text-white font-poppen font-semibold lg:text-[16px] text-[14px]' href="#">Gallery</a></li>
                    </ul>
                  </div>
                  <div className="">
                    <ul>
                      <p  className='text-white font-bold font-poppen lg:text-[20px] text-[16px]'>Others</p>
                      <li className='mt-[10px]'><a className='text-white font-poppen font-semibold lg:text-[16px] text-[14px]' href="#">Blog</a></li>
                      <li className='mt-[10px]'><a className='text-white font-poppen font-semibold lg:text-[16px] text-[14px]' href="#">Contact</a></li>
                      <li className='mt-[10px]'><a className='text-white font-poppen font-semibold lg:text-[16px] text-[14px]' href="#">Terms & Conditions</a></li>
                      <li className='mt-[10px]'><a className='text-white font-poppen font-semibold lg:text-[16px] text-[14px]' href="#">Privacy Policy</a></li>
                    </ul>
                  </div>
                  <div className="">
                    <p  className='text-white font-bold font-poppen lg:text-[20px] text-[16px]'>Certificate</p>
                    <div className="lg:flex">
                        <img src={certOne} alt="" />
                        <img className='lg:mt-0 mt-4' src={certTwo} alt="" />
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className="bg-[#282828] py-6">
      <div className="max-w-container mx-auto">
        <div className="">
          <p className='text-[#6C6C6C] font-semibold font-poppen text-[16px]'>© Copyright 2022 by AltDesain Studio – All right reserved.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
