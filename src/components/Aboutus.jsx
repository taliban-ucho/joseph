import React from 'react';
import { motion } from 'framer-motion';

const Aboutus = () => {
  return (
    <div className="container py-5">
      {/* Title */}
      <motion.h1
        className="display-4 text-center mb-5 text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Who We Are
      </motion.h1>

      <div className="row align-items-center justify-content-center">
        {/* Image */}
        <motion.div
          className="col-md-6 mb-4"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="card shadow-lg border-0 p-3 rounded-4">
            <img
              src="photos/driver1.jpeg"
              alt="jaseri. one of our drivers"
              className="img-fluid rounded-3"
            />
          </div>
        </motion.div>

        {/* Info Text */}
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="p-3">
            <h2 className="text-secondary mb-3">Our Mission</h2>
            <p className="text-muted">
              <strong>verduras</strong>  From the heart of our farms to your Household.Verduras is a subsidiary application of <strong>JOHASHA SUPPLIERS</strong> which is located on the heart of Eldoret uasinGishu county.We offer both retail and wholesale farm produce to your door. it is from here where majority of our produce are collected summed and even distributed through out the country. Our intent is to make sure that your health is taken care of by our highly norished veges and fruits to your table<strong>VERDURAS:YOUR SHAMBER ON PHONE</strong>
              
            </p>

            <h3 className="mt-4 text-info">What Makes Us Different?</h3>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">✅ 100% ethically sourced Designs</li>
              <li className="list-group-item">🚚 Fast nationwide delivery</li>
              <li className="list-group-item">🎁 Handpicked seasonal collections</li>
              <li className="list-group-item">🤝 Dedicated customer support</li>
            </ul>

            <motion.div whileHover={{ scale: 1.03 }}>
              <div className="alert alert-success rounded-pill text-center">
                🌍 Trusted by <strong>1,000+ happy customers</strong> across Kenya!
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutus;