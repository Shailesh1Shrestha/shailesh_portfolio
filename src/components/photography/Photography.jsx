import React from 'react'
import Photos from './Photos'

function Photography() {
  return (
    <div className="lg:px-12 px-4 my-32 bg-bgShade py-32 " id="photography">
        <div className = "text-headingColor mb-20">
        <p className='text-xl font-semibold mb-5'>Photography</p>
        <h2 className='md:text-5xl text-4xl font-bold'>My Photography</h2>
      </div>

      <Photos />
    </div>
  )
}

export default Photography
