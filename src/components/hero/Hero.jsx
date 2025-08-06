import React from 'react';
import './hero.css';

import image1 from '../../assets/heroImage1.png'
import image2 from '../../assets/heroImage2.png'

export const Hero = () => {
  return (
    <div className="container section">
      <div className="container-left">
        <p className="subtitle">
          Order Restaurant food, takeaway and groceries.
        </p>
        <h1>
          Feast Your Senses, <br />
          <span>Fast and Fresh</span>
        </h1>
        <p className="post-title">Enter a postcode to see what we deliver</p>
        <div className="search-box">
          <input type="text" placeholder="e.g. EC4R 3TE" />
          <button>Search</button>
        </div>
      </div>

      <img className="main-image" src={image2} alt="Main Food Banner" />

      <div className="container-right">
        <div className="orange-card">
          <img src={image1} alt="Secondary Promo" />
        </div>

        <div className="notifications">
          <div className="notification notification-1">
            <div className="notification-header">
              <span className="notification-title">Order</span>
              <span className="notification-time">now</span>
            </div>
            <div className="notification-content">
              <strong>We've Received your order</strong>
              <br />
              awaiting restaurant's acceptance
            </div>
          </div>

          <div className="notification notification-2">
            <div className="notification-header">
              <span className="notification-title">Order</span>
              <span className="notification-time">now</span>
            </div>
            <div className="notification-content">
              <strong>Order Accepted</strong>
              <br />
              your order will be delivered shortly
            </div>
          </div>

          <div className="notification notification-3">
            <div className="notification-header">
              <span className="notification-title">Order</span>
              <span className="notification-time">now</span>
            </div>
            <div className="notification-content">
              <strong>Your rider's nearby</strong>
              <br />
              They're almost there — get ready
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
