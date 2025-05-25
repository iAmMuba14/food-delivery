import React, { useState } from 'react'
import './header.css'

import cart from '../../assets/Basket.png'
import save from '../../assets/save.png'
import goldstar from '../../assets/gold-star.png'
import { GrLocation } from 'react-icons/gr'
import { VscAccount } from 'react-icons/vsc'

function Header() {
    const [isActiveIndex, setIsActiveIndex] = useState(0);

    const changeActiveItem = (index) => {
      setIsActiveIndex(index);
    }

  return (
    <section className="header section">
        <div className="info-head">
            <div className="left">
                <p><img src={goldstar} alt="" />Get 5% off your first order, <span>Promo:ORDER5</span></p>
            </div>
            <div className="right">
                <p><GrLocation className='icon'/>Regent Street, A4, A4201, London <span>change Location</span></p>
                <div className="stats">
                    <div className="cart stat">
                        <img src={cart} alt="" />
                    </div>
                    <div className="no-items stat">
                        23 Items
                    </div>
                    <div className="rate stat">
                        GBP 79.89
                    </div>
                    <div className="save stat">
                        <img src={save} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="navbar">
            <div className="logo">
                logo
            </div>
            <ul className="menu">
                {['Home', 'Browse  Menu', 'Special Offers', 'Restaurants', 'Track Order'].map((item, index) => (
                    <li
                       key={index}
                       className={`menuList ${isActiveIndex === index ? 'active' : ''}`}
                       onClick={() => changeActiveItem(index)}
                    >
                        <a href="#">{item}</a>
                    </li>
                ))}
                <li className='menuList menuButton'>
                    <span><VscAccount/></span>
                    <button>
                        login/signup
                    </button>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Header