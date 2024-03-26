import React from 'react'
import piclogo from '../assets/piclogo1.png'
import piclogo1 from '../assets/piclogo2.png'
import piclogo2 from '../assets/piclogo3.png'
import piclogo3 from '../assets/piclogo4.png'

const Picturepart = () => {
  return (
    <div>
      <div className="max-w-container mx-auto py-9 ">
         <div className="flex lg:flex-wrap justify-between">
           <div className="">
            <div className="w-[100%]">
                <img src={piclogo} className='w-full' alt="" />
            </div>
        </div>
        <div className="">
            <div className="w-[100%]">
                <img src={piclogo1} className='w-full' alt="" />
            </div>
        </div>
        <div className="">
            <div className="w-[100%]">
                <img src={piclogo2} className='w-full' alt="" />
            </div>
        </div>
        <div className="">
            <div className="w-[100%]">
                <img src={piclogo3} className='w-full' alt="" />
            </div>
        </div>
          </div>
      </div>
    </div>
  )
}

export default Picturepart
