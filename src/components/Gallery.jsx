import React from 'react'
import Galreusable from './reusable/Galreusable'
import galimg from '../assets/gal1.png'
import galimg1 from '../assets/gal2.png'
import galimg2 from '../assets/gal3.png'
import galimg3 from '../assets/gal4.png'

const Gallery = () => {
  return (
    <div>
      <div className="lg:flex flex-wrap justify-between">
            <Galreusable haba={galimg}/>
            <Galreusable haba={galimg1}/>
            <Galreusable haba={galimg2}/>
            <Galreusable haba={galimg3}/>
        </div>
      </div>
  )
}

export default Gallery
