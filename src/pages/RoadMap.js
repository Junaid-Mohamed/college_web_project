import React from 'react';
import {Link} from 'react-router-dom'

export default function RoadMap() {
  return <React.Fragment>
  
  <header>
    <a href="#" class="logo">Road Map</a>

    <input type="checkbox" id="menu-bar" />
    <label for="menu-bar" class="fas fa-bars"></label>

    <nav class="navbar">
    <Link to='/'>home</Link>
    <Link to='/'>contact</Link>
      {/* <a href="index.html">home</a>
      <a href="index.html">contact</a> */}
    </nav>
  </header>

   <div class="container">
      <h3 class="title">Road map</h3>

      <div class="products-container">
        <div class="product" data-name="p-1">
          <img src="assests/Image/roadmap.png" alt="" />
          <h3>PMC Road Map</h3>
        </div>

      </div>
    </div>

    <div class="products-preview">
      <div class="preview" data-target="p-1">
        <i class="fas fa-times"></i>
        {/* <!-- <img src="assests/Image/roadmap.png" alt="" /> --> */}
        <h3>PMC Road Map</h3>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <span>( 150 )</span>
        </div>
        <p><b>visual representation
          of the course </b>.</p>

        <div class="buttons">
          <a href="https://view.genial.ly/61e5456d55825d0ce86842a3/interactive-image-pmc-course-roadmap" class="buy">View</a>
        </div>
      </div>


    </div>
    <div class="footer">
      <div class="box-container">
        <div class="box">
          <h3>about us</h3>
          <p>
            St. Joseph's College is a private, Jesuit, higher educational
            institution.Run by the Karnataka Province of the Society of Jesus in
            Bangalore, Karnataka,India.It is one of the oldest colleges in the
            state of Karnataka with a history of 139 years.
          </p>
        </div>

        <div class="box">
          <h3>quick links</h3>
          <a href="#home">home</a>
          <a href="#services">services</a>
          <a href="#about">about</a>
          <a href="#team">our team</a>
          <a href="#contact">contact</a>
        </div>

        <div class="box">
          <h3>follow us</h3>
          <a href="https://www.facebook.com/sjcbengaluru/" target="_blank">facebook</a>
          <a href="https://www.instagram.com/sjcbengaluru/?hl=en" target="_blank">instagram</a>
          <a href="https://www.youtube.com/c/SJCBengaluru" target="_blank">you tube</a>
          <a href="https://twitter.com/sjcbengaluru?lang=en" target="_blank">twitter</a>
        </div>

        <div class="box">
          <h3>contact info</h3>
          <div class="info">
            <i class="fas fa-phone"></i>
            <p>(+91 33) 2227-4079</p>
          </div>
          <div class="info">
            <i class="fas fa-envelope"></i>
            <p>desk@sjc.ac.in</p>
          </div>
          <div class="info">
            <i class="fas fa-map-marker-alt"></i>
            <p>bangalore, india - 560027</p>
          </div>
        </div>
      </div>

      <h1 class="credit">&copy; copyright @ 2022 by St.Joseph's College</h1>
    </div>
  
  </React.Fragment>;
}
