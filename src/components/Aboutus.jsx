import React from 'react';
import Footer from './Footer';

const Aboutus = () => {
  return (
    <div className="row justify-content-center">
      <h1 className="display-4 text-danger mb-4">About Us</h1>

    

      <div className="col-md-6">
        <h2 className="text-success">Our Team:</h2>
        <ul>
          <li>Hellen: CEO</li>
          <li>Joseph: COO</li>
          <li>Judy: Member</li>
          <li>Maria: Member</li>
        </ul>
        
        <p>
          Veduras is a subsidiary of Johasha Suppliers. We specialize in the distribution of farm produce to industries, hotels, schools, hospitals, and more. Our commitment is to provide a wide range of high-quality farm products that benefit both farmers and consumers alike.
        </p>
        
       
        
        <h3 className="text-primary mt-4">Over 30+ services, over 1200+ customers served...</h3>
      </div>

      <Footer />
    </div>
  );
};

export default Aboutus;
