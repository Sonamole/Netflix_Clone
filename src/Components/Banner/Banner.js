import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>Lorem is a piece of Latin text used as a placeholder in graphic design, publishing, and the web.</h1>
        </div>
       <div className="fade_bottom">
          
       </div>

    </div>
  )
}

export default Banner