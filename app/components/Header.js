"use client";
import { useState } from "react";
import Modal from "./Signup";
import Overlay from "./Overlay";
import { motion } from "framer-motion";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <motion.div className="header-main"
      initial={{
        opacity: 0, // Initial opacity set to 0
      }}
      animate={{
        opacity: 1, // Final opacity set to 1
      }}
      transition={{
        duration: 1, // Animation duration in seconds (200ms)
      }}>
      <div className="header-container">
        <Modal isOpen={modalOpen} closeModal={closeModal} />
        <Overlay isOpen={modalOpen} closeModal={closeModal} />

        <div className="logo-container">
          <img src="/header-logo.png" alt="Header Logo" />

          <p>Unbeatable Loans</p>
        </div>
        <div className="btn-container">
          <div className="sign-up" onClick={openModal}>
            Sign Up
          </div>
          <div className="get-started" onClick={openModal}>
            Get Started
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
