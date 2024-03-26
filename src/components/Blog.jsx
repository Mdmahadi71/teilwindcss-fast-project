import React from 'react'

const Blog = () => {
  return (
    <div className='py-[100px]'>
      <div className="max-w-container mx-auto">
        <div className=" lg:flex flex-wrap justify-between">
          <div className="lg:w-[33%] mt-6">
          <div className="bg-[url('../src/assets/blog1.png')] bg-no-repeat bg-cover bg-center py-[60px] px-[40px] relative after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full after:bg-[#00000078]">
              <h2 className='text-[#ffff] font-poppen font-bold lg:text-start text-center text-[24px]' >lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
              <div className="mt-[50px] lg:text-start text-center ">
              <a className='border py-3 px-5 bg-[#FFFFFF] text-[#000000] font-poppen font-semibold text-[16px]' href="#">Read more</a>
              </div>
          </div>
          </div>
          <div className="lg:w-[33%] mt-6">
          <div className="bg-[url('../src/assets/blog2.png')] bg-no-repeat bg-cover bg-center py-[60px] px-[40px] relative after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full after:bg-[#00000078]">
              <h2 className='text-[#ffff] font-poppen font-bold lg:text-start text-center text-[24px]' >lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
              <div className="mt-[50px] lg:text-start text-center">
              <a className='border py-3 px-5 bg-[#FFFFFF] text-[#000000] font-poppen font-semibold text-[16px]' href="#">Read more</a>
              </div>
          </div>
          </div>
          <div className="lg:w-[33%] mt-6">
          <div className="bg-[url('../src/assets/blog3.png')] bg-no-repeat bg-cover bg-center py-[60px] px-[40px] relative after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full after:bg-[#00000078]">
              <h2 className='text-[#ffff] font-poppen font-bold lg:text-start text-center text-[24px]' >lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
              <div className="mt-[50px] lg:text-start text-center">
              <a className='border py-3 px-5 bg-[#ffffff] text-[#000000]  font-poppen font-semibold text-[16px]' href="#">Read more</a>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
