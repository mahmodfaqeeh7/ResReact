import React from 'react';
import './Home.css'; // Import your CSS file for styling
import Navbar from '../components/Navbar';
import back3 from '../assets/back3.jpg';
import Cbody from '../components/CarouselBody';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <section className="section section1">

        <div className="content">
          <h1 className='h12'>Welcome to GG EZ</h1>
          <p className='phome'>Not just a resturant , we are the one who everyone are looking for, <br /> we are the best we are speicial.</p>
          <button class="button">
            Order Now
          </button>
        </div>

      </section>

      <section className="section ">
      <h1 className='section-header'>Our locations</h1>


        <div className="wrapper">
          <img src={back3} alt="" />
          <div className='textbox'> 
          <h2>Amman complex</h2>
          <p>This is a paragraph aligned to the right  ,this is a test para just to make it long enough.</p>
          
          </div>
        <button className="button">Right Aligned Button</button>
        </div>
        <div className="wrapper">
          <img className='imgcus' src={back3} alt="" />
          <div className='textbox'> 
          <h2>30's street complex</h2>
          <p>This is a paragraph aligned to the right  ,this is a test para just to make it long enough.</p>
          
          </div>
        <button className="button">Right Aligned Button</button>
        </div>

      </section>

      <section className="section ">
        <Cbody/>
      </section>
    </div>
  );
};

export default HomePage;
