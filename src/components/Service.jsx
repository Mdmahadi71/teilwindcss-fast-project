import React from 'react'

const Service = () => {
  return (
    <div className='lg:pt-[100px] lg:pb-[100px]'>
      <div className="lg:flex justify-between">
        <div className="lg:w-[49%] py-4">
            <div className="text-center justify-center">
                <h2 className='lg:text-[64px] font-poppen font-bold text-center'>Our Services</h2>
                <p className='text-[16px] font-poppen font-medium   lg:w-[400px]  '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </div>
        <div className="bg-[url('../src/assets/hbaaa.png')] bg-no-repeat bg-cover bg-center lg:w-[49%] py-4 h-[300px] relative after:absolute after:content-[''] after:top-0 after:left-0 after:bg-[#0000005a] after:w-full after:h-full ">
        <div className="lg:py-[100px] lg:px-[50px]">
            <h2 className='text-white font-poppen text-[24px] lg:font-bold lg:text-start text-center'>Modern natural oil and gas refineries.</h2>
            <div className="mt-[30px] lg:text-start text-center">
            <a className=' border py-3 px-4 bg-[#F40404] text-white font-poppen  font-semibold text-[16px]' href="#">Learn More</a>
            </div>
            </div>
        </div>
      </div>
      <div className="lg:flex flex-wrap justify-between">
     <div className="lg:w-[49%] py-4">
       <div className="bg-[url('../src/assets/sar1.png')] bg-no-repeat bg-cover bg-center w-full h-[300px] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[#0000005a]">
       <div className="lg:py-[100px] lg:px-[50px]">
            <h2 className='text-white font-poppen text-[24px] lg:font-bold lg:text-start text-center'>Modern natural oil and gas refineries.</h2>
            <div className="mt-[30px] lg:text-start text-center">
            <a className=' border py-3 px-4 bg-[#F40404] text-white font-poppen font-semibold text-[16px]' href="#">Learn More</a>
            </div>
            </div>
        </div>
     </div>
     <div className="lg:w-[49%] py-4">
       <div className="bg-[url('../src/assets/sar3.png')] bg-no-repeat bg-cover bg-center w-full  h-[300px] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[#0000005a]">
            <div className="lg:py-[100px] lg:px-[50px]">
            <h2 className='text-white font-poppen text-[24px] lg:font-bold lg:text-start text-center' >Modern natural oil and gas refineries.</h2>
            <div className="mt-[30px] lg:text-start text-center">
            <a className=' border py-3 px-4 bg-[#F40404] text-white font-poppen font-semibold text-[16px]' href="#">Learn More</a>
            </div>
            </div>
        </div>
     </div>
      </div>
    </div>
  )
}

export default Service
