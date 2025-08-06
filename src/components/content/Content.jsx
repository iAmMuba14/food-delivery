import React, { useState } from 'react'
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

import Banner from '../Banner/banner1/Banner'

import chef1 from '../../assets/chef1.png'
import chef2 from '../../assets/chef2.png'

import order1 from '../../assets/order-food 1.png'
import order2 from '../../assets/food 1.png'
import order3 from '../../assets/order 2.png'

const deals = [
  { img: dish1, name: "Chef Burgers London", discount: -40 },
  { img: dish2, name: "Grand Ai Cafe London", discount: -20 },
  { img: dish1, name: "Butterbrot Cafe London", discount: -17 }
];

const chefs = [
  { img: chef1, subtitle: "Sign up as a business", title: "Partner with us", banner: "Earn more with lower fees" },
  { img: chef2, subtitle: "Sign up as a rider", title: "Ride with us", banner: "Available exclusive perks" },
]

const order = [
  { title: "Place an Order!", img: order1, subtitle: "Place order through our website or mobile app" },
  { title: "Track Progress", img: order2, subtitle: "You can track your order status with delivery time" },
  { title: "Get your Order!", img: order3, subtitle: "Receive your order at a lightning fast speed!" },
]




function Content() {

  const [isActiveIndex, setIsActiveIndex] = useState(0);
  const menuItems = ['Vegan', 'Sushi', 'Pizza & Fast food', 'Others'];
  const aboutMenuItems = ['Frequent Questions', 'Who we are', 'Partner Program', 'Help & Support'];

  const changeActiveItem = (index) => {
    setIsActiveIndex(index);
  };

  return (
    <div className="content section">
      <div className="deals">
        <div className="c-header">
          <div className="description">
            <h2>Up to -40% Order.uk exclusive deals</h2>
          </div>

          <ul className="menu-items">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`menu-item ${isActiveIndex === index ? 'active' : ''}`}
                onClick={() => changeActiveItem(index)}
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <ExclusiveDeal />
      </div>


      <div className="categories">
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

      <div className="restaurants">
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

      <Banner />
      <Partner />

      <div className="about">
        <div className="nav">
          <h1>Know more about us!</h1>
          <ul className="menu-items">
            {aboutMenuItems.map((item, index) => (
              <li
                key={index}
                className={`menu-item ${isActiveIndex === index ? 'active' : ''}`}
                onClick={() => changeActiveItem(index)}
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-contents">
          <div className="faq">
            <span className='active'>How does it work?</span>
            <span>What payment methods are accepted?</span>
            <span>Can I track my order in real-time?</span>
            <span>Are there any special deiscounts or <br />promotions available?</span>
            <span>Is Order.UK available in my area?</span>
          </div>
          <div className="right">
            <div className="cards">
              {order.map((item, index) => (
                <div className="card" key={index}>
                  <p class="title">{item.title}</p>
                  <img src={item.img} alt="" />
                  <p class="subtitle">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
            <p className='bottom-subtitle'>
              Order.UK simplifies the food ordering process. Browse through our diverse menu,
              select your favorite dishes, and proceed to checkout.
              Your delicious meal will be on its way to your doorstep in no time!
            </p>
          </div>

        </div>

      </div>

      <div class="stats-banner">
        <div class="stat">
          <h2>546+</h2>
          <p>Registered Riders</p>
        </div>
        <div class="divider"></div>
        <div class="stat">
          <h2>789,900+</h2>
          <p>Orders Delivered</p>
        </div>
        <div class="divider"></div>
        <div class="stat">
          <h2>690+</h2>
          <p>Restaurants Partnered</p>
        </div>
        <div class="divider"></div>
        <div class="stat">
          <h2>17,457+</h2>
          <p>Food Items</p>
        </div>
      </div>

    </div>
  );
}

export default Content

const ExclusiveDeal = () => (
  <div className="cards">
    {deals.map((deal, index) => (
      <div className="card" key={index}>
        <div className="discount-banner">{deal.discount}%</div>
        <div className="image">
          <img src={deal.img} alt={deal.name} />
        </div>
        <div className="subtitle">
          <p>Restaurant</p>
          <h3>{deal.name}</h3>
        </div>
      </div>
    ))}
  </div>
)

const PopularCat = ({ image, title, desc }) => (
  <div className="card">
    <img src={image} alt="" />
    <div className="card-detail">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
);

const PopularRestaurant = ({ image, title }) => (
  <div className="card">
    <img src={image} alt="" />
    <div className="card-detail">
      {title}
    </div>
  </div>
);

const Partner = () => (
  <div className="partner">
    {chefs.map((chef, index) => (
      <div className="card" key={index}>
        <img src={chef.img} alt="" />
        <div className="topBanner">
          {chef.banner}
        </div>
        <div className="desc">
          <p>{chef.subtitle}</p>
          <h3>{chef.title}</h3>
          <button>Get Started</button>
        </div>
      </div>
    ))}
  </div>
)
