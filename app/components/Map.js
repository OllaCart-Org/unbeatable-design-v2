"use client";
import React from "react";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

const Map = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCtaModalOpen, setIsCtaModalOpen] = useState(true);
  const [ref1, inView1] = useInView({ triggerOnce: true });

  // Function to open the contact modal

  // Function to open the contact modal
  const openContactModal = () => {
    setIsContactModalOpen(true);
    setIsCtaModalOpen(false); // Hide cta-modal
  };

  // Function to close the contact modal
  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setIsCtaModalOpen(true); // Show cta-modal
  };
  return (
    <motion.div className="map-main"
      ref={ref1}
      initial={{
        opacity: 0,
        y: 40, // Move slightly down initially
      }}
      animate={{
        opacity: inView1 ? 1 : 0,
        y: inView1 ? 0 : 40,
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="iframe-container" style={{ width: '100%', overflow: 'hidden', height: '1000px' }} >
        <iframe style={{ border: '0', marginTop: '-60px' }} src="https://www.google.com/maps/d/embed?mid=1ZoHFO99jz1ED1lmuxpk90BrahrEkN_k&ehbc=2E312F" width="640" height="480" frameborder="0" sandbox=" allow-scripts"></iframe>

      </div>
      {isCtaModalOpen && (
        <div className="cta-modal">
          <h1>See where we have closed deals in the past</h1>
          <p>
            We have closed millions. Ask us a question.
          </p>
          <div className="contact-btn" onClick={openContactModal}>
            Contact Us
          </div>
        </div>
      )}

      {isContactModalOpen && (
        <div className="contact-modal">
          <form action="">
            <div className="cross " onClick={closeContactModal}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7075 24.2924C25.8004 24.3854 25.8741 24.4957 25.9244 24.6171C25.9747 24.7384 26.0006 24.8686 26.0006 24.9999C26.0006 25.1313 25.9747 25.2614 25.9244 25.3828C25.8741 25.5042 25.8004 25.6145 25.7075 25.7074C25.6146 25.8004 25.5043 25.8741 25.3829 25.9243C25.2615 25.9746 25.1314 26.0005 25 26.0005C24.8686 26.0005 24.7385 25.9746 24.6171 25.9243C24.4957 25.8741 24.3854 25.8004 24.2925 25.7074L16 17.4137L7.70751 25.7074C7.51987 25.8951 7.26537 26.0005 7.00001 26.0005C6.73464 26.0005 6.48015 25.8951 6.29251 25.7074C6.10487 25.5198 5.99945 25.2653 5.99945 24.9999C5.99945 24.7346 6.10487 24.4801 6.29251 24.2924L14.5863 15.9999L6.29251 7.70745C6.10487 7.5198 5.99945 7.26531 5.99945 6.99995C5.99945 6.73458 6.10487 6.48009 6.29251 6.29245C6.48015 6.1048 6.73464 5.99939 7.00001 5.99939C7.26537 5.99939 7.51987 6.1048 7.70751 6.29245L16 14.5862L24.2925 6.29245C24.4801 6.10481 24.7346 5.99939 25 5.99939C25.2654 5.99939 25.5199 6.1048 25.7075 6.29245C25.8951 6.48009 26.0006 6.73458 26.0006 6.99995C26.0006 7.26531 25.8951 7.5198 25.7075 7.70745L17.4138 15.9999L25.7075 24.2924Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="headings">
              <h1>Work With Us</h1>
              <p>
                Our team of experienced loan officers are dedicated to helping you
                navigate the complex world of real estate.
              </p>
            </div>
            <div className="form-wrap">
              <div className="input-container">
                <p>Name</p>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="input-container">
                <p>Email</p>
                <input type="text" placeholder="Email" />
              </div>
              <div className="input-container">
                <p>Description</p>
                <input
                  type="text"
                  placeholder="Optional"
                  className="desc-input"
                />
              </div>
            </div>
            <div className="submit-btn">Submit</div>
            <p>
              This site is protected by Google privacy and Terms of service
              apply.
            </p>
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default Map;
