import React from 'react';
import './Banner.css'

import twoAdults from '../../../assets/two-adults.png';
import logo from '../../../assets/LOGO 1.png';
import apple_store from '../../../assets/app_store.png'
import google_play from '../../../assets/google_play.png'

const Banner = () => {
  return (
    <div className="bannerContainer">
      <div className="image">
        <img src={twoAdults} alt="" />
      </div>
      <div className="desc">
        <div className="title">
          <div className="logo">
            <img src={logo} alt="" />
            <h1>ing is more</h1>
          </div>
        </div>
        <div className="personalised">
          <span>Personalised </span> & Instant
        </div>
        <p className="info-text">Download the Order.uk app for faster ordering</p>
        <div className="app-download">
          <img className="apple" src={apple_store} alt="" />
          <img className="google" src={google_play} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
