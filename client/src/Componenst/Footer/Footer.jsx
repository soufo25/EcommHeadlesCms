import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Shoes</span>
          <span>Acessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Ut voluptas temporibus dolores et, maiores molestiae non
              dolorum iure autem odio officia, dolor magnam odit fugit 
              libero magni aperiam assumenda commodi?
              </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Ut voluptas temporibus dolores et, maiores molestiae non
              dolorum iure autem odio officia, dolor magnam odit fugit 
              libero magni aperiam assumenda commodi?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">FOZOU-STORE</span>
          <span className="copyright"> Copyright 2022. All Right Reserved  </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
     
    </div>
  )
}

export default Footer;
