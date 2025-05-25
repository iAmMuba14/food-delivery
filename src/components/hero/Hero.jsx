import React from 'react'
import './hero.css'

export const Hero = () => {
  return (
    <div className="hero section">
        <div className="left">
            <p>Order Restaurant food, takeaway and groceries</p>
            <h1>Feast Your Senses, <br /> <span>Fast and Fresh</span></h1>
            <small>Enter a postcode to see what we deliver</small>
            <div className="search-box">
                <span className='text'>e.g.EC4R 3TE</span>
                <span className='search'>Search</span>
            </div>
        </div>

        <div className="right">
            <div className="orange-back">
                <div className="back-photo">
                    <img src="" alt="" />
                    <div className="sticker">
                        <h3>Order</h3>
                        <span>We've received your order</span>
                        <span>Awaiting Restaurant acceptance</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
