import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { VscAccount } from 'react-icons/vsc';

import logo from '../../assets/LOGO 1.png'

function Navbar() {
  const [isActiveIndex, setIsActiveIndex] = useState(0);
  const menuItems = ['Home', 'Browse Menu', 'Special Offers', 'Restaurants', 'Track Order'];

  const [scroll, setScroll] = useState(false)

  const handleScroll = () => {
    setScroll(window.scrollY > 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeActiveItem = (index) => {
    setIsActiveIndex(index);
  };

  return (
    <nav className={`navbar ${scroll ? 'scrolled' : ''}`}>
      <img src={logo} alt="" />
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menuList ${isActiveIndex === index ? 'active' : ''}`}
            onClick={() => changeActiveItem(index)}
          >
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      <div className="menuList menuButton">
          <VscAccount className='acc-icon' />
          <button>login/signup</button>
        </div>
    </nav>
  );
}

export default Navbar;
