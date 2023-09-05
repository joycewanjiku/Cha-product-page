import React from 'react';
import './style.css'





const MenuList = [
  
];

const Manual = () => {
  return (
    <div className="product">
      <h1>Our <span>Ecocconect </span>Products </h1>
      <p className='p'>EcoConnect is an  web app that connects waste collecters<br />recyclers and the public to help reduce waste going to landfills<br />.The web app can be used to schedule waste collection appointments <br />provide information on recycling  guidelines and track the progress of waste <br />.EcoConnect can help to create a greener of waste  .EcoConnect can help to create a greenre<br /> future by making waste managment more efficient and convenient.  <br></br></p>
      <div className="product-container">
        {MenuList.map((item, index) => (
          <div key={index} className="product-item">
            <div className="product-image-container">
              <img src={item.image} alt={item.name} className="product-image" />
            </div>
            <div className="product-details">
              <p className="product-name">{item.name}</p>
            <p>$4.80 &nbsp; &nbsp; &nbsp;<button className="buy-button">Buy Now</button></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manual;