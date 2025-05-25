import React from 'react'
import './content.css'

import dish1 from '../../assets/dish1.png'
import dish2 from '../../assets/dish2.png'

import food1 from '../../assets/food-1.png'
import food2 from '../../assets/food-2.png'
import food3 from '../../assets/food-3.png'
import food4 from '../../assets/food-4.png'
import food5 from '../../assets/food-5.png'
import food6 from '../../assets/food-6.png'

import ResMCD from '../../assets/ResMCD.png'
import ResPJ from '../../assets/ResPJ.png'
import ResKFC from '../../assets/ResKFC.png'
import ResTx from '../../assets/ResTx.png'
import ResBK from '../../assets/ResBK.png'
import ResSHW from '../../assets/ResSHW.png'

function Content() {
  return (
    <div className="content section">
      <div className="top">
        <div className="c-header">
          <div className="description">
            <h2>Up to -40% Order.uk exclusive deals</h2>
          </div>

          <ul className="menu-items">
            <li className="menu-item">
              <a href="">Vegan</a>
            </li>
            <li className="menu-item">
              <a href="">Sushi</a>
            </li>
            <li className="menu-item">
              <a href="">Pizza & fast food</a>
            </li>
            <li className="menu-item">
              <a href="">Others</a>
            </li>
          </ul>
        </div>

        <div className="cards">
          <div className="card">
            <div className="discount-banner">
                -40%
            </div>
            <div className="image">
              <img src={dish1} alt="" />
            </div>

            <div className="subtitle">              
              <p>Restaurants</p>
              <h3>Chef Burgers London</h3>
            </div>
          </div>
          <div className="card">
            <div className="discount-banner">
                -40%
            </div>
            <div className="image">
              <img src={dish2} alt="" />
            </div>

            <div className="subtitle">              
              <p>Restaurants</p>
              <h3>Chef Burgers London</h3>
            </div>
          </div>
          <div className="card">
            <div className="discount-banner">
                -40%
            </div>
            <div className="image">
              <img src={dish1} alt="" />
            </div>

            <div className="subtitle">              
              <p>Restaurants</p>
              <h3>Chef Burgers London</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="middle">
        <div className="c-header">
            <h2>Order.uk Popular Categories</h2>
        </div>

        <div className="cards">
            <PopularCat image={food1} title={"Burgers & Fast food"} desc={"27 Resataurants"} />
            <PopularCat image={food2} title={"Salads"} desc={"21 Resataurants"} />
            <PopularCat image={food3} title={"Pasta & Casuals"} desc={"4 Resataurants"} />
            <PopularCat image={food4} title={"Pizza"} desc={"32 Resataurants"} />
            <PopularCat image={food5} title={"Breakfast"} desc={"4 Resataurants"} />
            <PopularCat image={food6} title={"Soups"} desc={"32 Resataurants"} />
        </div>
      </div>

      <div className="last">
        <div className="c-header">
            <h2>Popular Restaurants</h2>
        </div>

        <div className="cards">
            <PopularRestaurant image={ResMCD} title={"McDonald's London"} />
            <PopularRestaurant image={ResPJ} title={"Papa Johns"} />
            <PopularRestaurant image={ResKFC} title={"KFC West London"} />
            <PopularRestaurant image={ResTx} title={"Texas Chicken"} />
            <PopularRestaurant image={ResBK} title={"Burger King"} />
            <PopularRestaurant image={ResSHW} title={"Shaurma 1"} />

        </div>
      </div>
    </div>
  );
}

export default Content

const PopularCat = ({image, title, desc}) => (
  <div className="card">
    <div className="image">
      <img src={image} alt="" />
    </div>
    <div className="card-detail">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
);

const PopularRestaurant = ({image, title}) => (
  <div className="card">
    <div className="image">
      <img src={image} alt="" />
    </div>
    <div className="card-detail">
      {title}
    </div>
  </div>
);