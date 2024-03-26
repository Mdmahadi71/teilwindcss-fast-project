import React, { useState } from 'react'
import manulg from '../assets/manulogo.png'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Manubar = () => {
    let [show , setshow]= useState(false)
    let handelmanu =()=>{
        setshow(!show)
    }
  return (
    <div className='bg-[#F40404] py-10'>
      <div className="max-w-container mx-auto">
          <div className="flex justify-between">
              <div className="">
                 <img src={manulg} alt="" />
              </div>
            <div className="">
                <ul className={`lg:flex gap-x-4  absolute lg:static ${ show==true ?'top-[228px] left-[0]  bg-[green] w-full h-[200px]  duration-500' 
                    :'top-[228px] left-[-110px] w-full bg-[] duration-500'} z-50 `}>
                    <li>
                        <a className='text-white hover:text-cyan-400 duration-200 font-poppen font-semibold text-[18px]' href="">Home</a>
                    </li>
                    <li>
                        <a className='text-white hover:text-cyan-400 duration-200 font-poppen font-semibold text-[18px]' href="">About</a>
                    </li>
                    <li>
                        <a className='text-white hover:text-cyan-400 duration-200 font-poppen font-semibold text-[18px]'href="">Services</a>
                    </li>
                    <li>
                        <a className='text-white hover:text-cyan-400 duration-200 font-poppen font-semibold text-[18px]' href="">Gallery</a>
                    </li>
                    <li>
                        <a className='text-white hover:text-cyan-400 duration-200 font-poppen font-semibold text-[18px]'href="">Blog</a>
                    </li>
                    <li className='lg:py-0 py-5'>
                      <a className='text-white font-poppen  font-semibold text-[18px] border-2 px-4 py-3 rounded-[15px]
                       hover:bg-yellow-300 hover:text-cyan-400 text:duration-200 duration-300 ' 
                      href="">Contact</a>
                   </li>
                </ul>
            </div>
            <div className="lg:hidden relative z-50 text-[20px] right-4 py-4" onClick={handelmanu}>
                {show == true  ? <RxCross1/> :<FaBars/>}
          </div>
          </div>
        </div>
      </div>
  )
}

export default Manubar
