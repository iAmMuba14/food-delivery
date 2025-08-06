// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';
import HeaderTop from '../HeaderTop/HeaderTop';
import Navbar from '../Navbar/Navbar';


function Header() {
  return (
    <section className="header section">
      <HeaderTop />
      <Navbar />
    </section>
  );
}

export default Header;
