import React from 'react'


const Banner = () => {
  return (
      <div className=" bg-[url('../src/assets/banner.png')] bg-no-repeat bg-center bg-cover lg:py-[280px] py-[50px] relative after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full after:bg-[#80808023]">
         <div className="max-w-container mx-auto">
            <h1 className='text-white lg:text-[64px] text-[35px] font-poppen lg:text-start text-center font-bold lg:w-[842px]'>We exist since 1975 on the oil and gas industry.</h1>
            <div className="pt-[30px] lg:text-start text-center">
                <a className='border px-4 py-4 bg-red-800 text-white font-poppen font-[16px] my-4 hover:bg-lime-500 duration-300 rounded-[15px]'
                 href="#">LEARN MORE</a>
            </div>
         </div>
      </div>
  )
}

export default Banner