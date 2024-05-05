import React from 'react';
import './Home.css'; // Import your CSS file for styling
import Navbar from '../components/Navbar';
const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <section className="section section1">
        
          <div className="content">
            <h1 className='h12'>GG EZ</h1>
            <p>Not just a resturant , we are the one who everyone are looking for, <br/> we are the best we are speicial.</p>
            <button className="button">Order Now</button>
          </div>
      
      </section>
    
      <section className="section section2">
        
          <div className="content2">
            <h1>Right Aligned Header</h1>
            <p>This is a paragraph aligned to the right.</p>
            <button className="button">Right Aligned Button</button>
          </div>
        
      </section>
      
      <section className="section section3">
        <div className="pages">
          <div className="content">
            <h1>Left Aligned Header</h1>
            <p>This is a paragraph aligned to the left.</p>
            <button className="button">Left Aligned Button</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
