import React from 'react'
import './Newsletter.css'

export default function NewsLetter() {
  return (
      <div className='newsletter'>
          <h1>Get Exclusive Offers on Your Email✉️</h1>
          <p>Subscribe to our newsletter and stay updated</p>

          <div>
              <input type="email" placeholder='Your Email Id' />
              <button>Subscribe👍</button>
          </div>
      
      </div>
  )
}
