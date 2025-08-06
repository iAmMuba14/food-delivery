// src/components/Header/HeaderTop.jsx
import React from 'react';
import './HeaderTop.css';

import cart from '../../assets/Basket.png';
import save from '../../assets/save.png';
import goldstar from '../../assets/gold-star.png';
import { GrLocation } from 'react-icons/gr';

function HeaderTop() {
  return (
    <div className="info-head">
      <div className="left">
        <p>
          <img src={goldstar} alt="Gold star" />
          Get 5% off your first order, <span>Promo:ORDER5</span>
        </p>
      </div>
      <div className="right">
        <p>
          <GrLocation className='icon' />
          Regent Street, A4, A4201, London <span>change Location</span>
        </p>
        <div className="stats">
          <div className="cart stat">
            <img src={cart} alt="Cart" />
          </div>
          <div className="no-items stat">23 Items</div>
          <div className="rate stat">GBP 79.89</div>
          <div className="save stat">
            <img src={save} alt="Save icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
