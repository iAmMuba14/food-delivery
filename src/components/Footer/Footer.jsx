import React from 'react'
import './Footer.css'

import logo from '../../assets/LOGO 2.png'
import app_store from '../../assets/app_store.png'
import google_play from '../../assets/google_play.png'
import { FaFacebook } from 'react-icons/fa6'
import { AiFillTikTok } from 'react-icons/ai'
import { FaSnapchatGhost } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-main">
        <div className="footer-brand column">
            <img src={logo} alt="logo2" />
            <div className="apps">
                <img src={app_store} className='apple' alt="" />
                <img src={google_play} alt="" />
            </div>
            <p>
                Company #490039-445, Registered with <br />
                house of companies, UK
            </p>
        </div>
        <div className="newsletter-section column">
            <h4>Get Exclusive Deals in your inbox</h4>
            <form action="" className="newsletter-form">
                <input type="email" placeholder='youremail@gmail.com' name="" id="" />
                <button type='submit'>Subscribe</button>
            </form>
            <p className="newsletter-disclaimer">
                we won't spam, read our <span>email policy</span>
            </p>
            <div className="social-links">
                <a href="" className="social-link"><FaFacebook /> </a>
                <a href="" className="social-link"><RiInstagramFill /> </a>
                <a href="" className="social-link"><AiFillTikTok /> </a>
                <a href="" className="social-link"><FaSnapchatGhost /> </a>
            </div>
        </div>

        <div className="links-section">
            <div className="links-column column">
                <h4>Legal Pages</h4>
                <ul className="footer-links">
                    <li><a href="#">Terms and conditions</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Cookies</a></li>
                    <li><a href="#">Modern Slavery Statement</a></li>
                </ul>
            </div>
            <div className="links-column column">
                <h4>Important Links</h4>
                <ul className="footer-links">
                    <li><a href="#">Get help</a></li>
                    <li><a href="#">Add your restaurant</a></li>
                    <li><a href="#">Sign up to deliver</a></li>
                    <li><a href="#">Create a business account</a></li>
                </ul>
            </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
            Order.UK &copy; 2025, All Rights Reserved
        </div>
        <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Pricing</a>
            <a href="#">Do not sell or share my personal info</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
