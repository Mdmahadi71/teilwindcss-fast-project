import React from 'react'

const Company = () => {
  return (
    <div>
      <div className="max-w-container mx-auto">
        <div className="lg:flex">
            <div className="3/1">
                <div className="border lg:w-[413px] h-[326px] bg-[#F40404]">
                    <h2 className='text-center justify-center text-white text-[25px] font-poppen font-bold w-[262px] mt-[100px] ml-[60px]'>Learn more about our company</h2>
                </div>
            </div>
            <div className="3/2">
                <div className="bg-[url('../src/assets/comp.png')] bg-no-repeat bg-center bg-cover lg:w-[725px] sm:w-full  h-[326px] relative">
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] ">
                    <a className='border py-4 px-3 bg-white text-[#F40404]' href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Company
