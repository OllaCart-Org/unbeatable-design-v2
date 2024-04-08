"use client";
import ExtensionBtn from "../components/ExtensionBtn";
import ExtensionBtnSection from "../components/ExtensionBtnSection";
import GetStarted from "../components/GetStarted";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Graph from "../components/Graph";
import ResidentialGraph from "../components/ResidentialGraph";
import InvestorGraph from "../components/InvestorGraph";
import RefinanceGraph from "../components/RefinanceGraph";
import RefinanceMap from "../components/RefinanceMap";
import Map from "../components/Map";
import InvestorMap from "../components/InvestorMap";
import Modal from "../components/Signup";
import Overlay from "../components/Overlay";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import HeroText from "../components/HeroText";
import HeroSubText from "../components/HeroSubText";




const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(2); // State to keep track of active tab
  const [scrolled, setScrolled] = useState(false);
  const [activeChips, setActiveChips] = useState([]);

  const videoEl = useRef(null);


  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });
  const [ref6, inView6] = useInView({ triggerOnce: true });
  const [ref7, inView7] = useInView({ triggerOnce: true });
  const [ref8, inView8] = useInView({ triggerOnce: true });
  const [ref9, inView9] = useInView({ triggerOnce: true });
  const [ref10, inView10] = useInView({ triggerOnce: true });
  const [ref11, inView11] = useInView({ triggerOnce: true });
  const [ref12, inView12] = useInView({ triggerOnce: true });
  const [ref13, inView13] = useInView({ triggerOnce: true });
  const [ref14, inView14] = useInView({ triggerOnce: true });
  const [ref15, inView15] = useInView({ triggerOnce: true });
  const [ref16, inView16] = useInView({ triggerOnce: true });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  const scrollDown = () => {
    if (!scrolled) {
      // Scroll down 60% of the viewport height
      const viewportHeight = window.innerHeight;
      const scrollAmount = 0.6 * viewportHeight;

      window.scrollTo({
        top: window.pageYOffset + scrollAmount,
        behavior: 'smooth' // For smooth scrolling animation
      });

      // Set scrolled to true to indicate that scrolling has been done
      setScrolled(true);
    }
  };


  const handleChipClick = (index) => {
    const currentIndex = activeChips.indexOf(index);
    let newActiveChips = [...activeChips];

    if (currentIndex === -1) {
      // Chip is not active, add it to the list
      newActiveChips.push(index);
    } else {
      // Chip is active, remove it from the list
      newActiveChips.splice(currentIndex, 1);
    }

    setActiveChips(newActiveChips);
  };

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };


  useEffect(() => {
    attemptPlay();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index); // Update active tab on tab click
  };



  return (
    <motion.div id="home-main"
      initial={{
        opacity: 0, // Initial opacity set to 0
      }}
      animate={{
        opacity: 1, // Final opacity set to 1
      }}
      transition={{
        duration: 1, // Animation duration in seconds (200ms)
      }}
    >
      <div className="home-container">
        <Modal isOpen={modalOpen} closeModal={closeModal} />
        <Overlay isOpen={modalOpen} closeModal={closeModal} />

        <div className="hero-section">
          <div className="img-container">
            <img src="/hero-background.png" alt="" />
          </div>
          <div className="hero-wrapper">

            <div className="hero-content"

            >
              <HeroText />
              <HeroSubText />
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laboriosam commodi, rem iure eum animi id iusto voluptatum consequuntur totam, architecto similique a at natus dolorum illum consequatur error explicabo!</p> */}
              <div className="btn-container">
                <div className="get-started" onClick={openModal}>
                  Get Started
                </div>

                <ExtensionBtn />
              </div>
            </div>

            <div className="hero-logo">
              <img
                src="/ollcart-system-icons_home wht 1.png"
                alt="Unbeatable Loans Logo"
              />
            </div>
          </div>
          <div className="tabs-main">
            <div
              className={activeTab === 0 ? "tab tab-active" : "tab"}
              onClick={() => { handleTabClick(0); scrollDown(); }}

            >
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  d="M26.5 5.3252V26.3252H19.5V5.3252H26.5Z"
                  fill="#BAA7FF"
                />
                <path
                  d="M28.5 25.3252H27.5V5.3252C27.5 5.05998 27.3946 4.80563 27.2071 4.61809C27.0196 4.43055 26.7652 4.3252 26.5 4.3252H19.5C19.2348 4.3252 18.9804 4.43055 18.7929 4.61809C18.6054 4.80563 18.5 5.05998 18.5 5.3252V10.3252H12.5C12.2348 10.3252 11.9804 10.4306 11.7929 10.6181C11.6054 10.8056 11.5 11.06 11.5 11.3252V16.3252H6.5C6.23478 16.3252 5.98043 16.4306 5.79289 16.6181C5.60536 16.8056 5.5 17.06 5.5 17.3252V25.3252H4.5C4.23478 25.3252 3.98043 25.4306 3.79289 25.6181C3.60536 25.8056 3.5 26.06 3.5 26.3252C3.5 26.5904 3.60536 26.8448 3.79289 27.0323C3.98043 27.2198 4.23478 27.3252 4.5 27.3252H28.5C28.7652 27.3252 29.0196 27.2198 29.2071 27.0323C29.3946 26.8448 29.5 26.5904 29.5 26.3252C29.5 26.06 29.3946 25.8056 29.2071 25.6181C29.0196 25.4306 28.7652 25.3252 28.5 25.3252ZM20.5 6.3252H25.5V25.3252H20.5V6.3252ZM13.5 12.3252H18.5V25.3252H13.5V12.3252ZM7.5 18.3252H11.5V25.3252H7.5V18.3252Z"
                  fill="#BAA7FF"
                />
              </svg>
              <p> Unbeatable Interest Rates </p>
            </div>
            <div
              className={activeTab === 1 ? "tab tab-active" : "tab"}
              onClick={() => { handleTabClick(1); scrollDown(); }}

            >
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_83_7746)">
                  <path
                    opacity="0.2"
                    d="M2.5 19.3252H6.5V26.3252H2.5C2.23478 26.3252 1.98043 26.2199 1.79289 26.0323C1.60536 25.8448 1.5 25.5905 1.5 25.3252V20.3252C1.5 20.06 1.60536 19.8057 1.79289 19.6181C1.98043 19.4306 2.23478 19.3252 2.5 19.3252ZM26 7.32524C25.4811 7.32556 24.9687 7.44127 24.5 7.66399C24.466 6.91332 24.1912 6.19354 23.7165 5.6111C23.2417 5.02866 22.592 4.61448 21.8637 4.42983C21.1353 4.24518 20.3668 4.29985 19.6719 4.58577C18.9769 4.87169 18.3925 5.37367 18.005 6.01746C17.6174 6.66126 17.4474 7.41269 17.52 8.16061C17.5925 8.90853 17.9039 9.61323 18.408 10.1705C18.9121 10.7278 19.5822 11.108 20.3191 11.2549C21.056 11.4019 21.8207 11.3078 22.5 10.9865C22.5316 11.671 22.7634 12.3311 23.1666 12.8851C23.5699 13.4391 24.1269 13.8625 24.7686 14.1028C25.4102 14.3432 26.1084 14.3899 26.7763 14.2372C27.4443 14.0845 28.0528 13.7391 28.5262 13.2438C28.9997 12.7485 29.3174 12.1251 29.4399 11.4509C29.5624 10.7767 29.4843 10.0814 29.2153 9.45124C28.9463 8.82104 28.4983 8.28366 27.9267 7.90573C27.3551 7.52781 26.6852 7.32597 26 7.32524Z"
                    fill="#BAA7FF"
                  />
                  <path
                    d="M29.2913 17.9577C28.9191 17.6714 28.486 17.4747 28.0255 17.383C27.5651 17.2913 27.0897 17.307 26.6362 17.4289L21.4062 18.6314C21.5279 18.1174 21.5317 17.5826 21.4172 17.0669C21.3028 16.5512 21.0731 16.0681 20.7454 15.6539C20.4177 15.2396 20.0005 14.9048 19.5251 14.6747C19.0496 14.4446 18.5282 14.3251 18 14.3252H11.7425C11.217 14.3239 10.6964 14.4267 10.2109 14.6277C9.72539 14.8288 9.28451 15.124 8.91375 15.4964L6.08625 18.3252H2.5C1.96957 18.3252 1.46086 18.5359 1.08579 18.911C0.710714 19.2861 0.5 19.7948 0.5 20.3252L0.5 25.3252C0.5 25.8556 0.710714 26.3643 1.08579 26.7394C1.46086 27.1145 1.96957 27.3252 2.5 27.3252H15.5C15.5818 27.3252 15.6632 27.3152 15.7425 27.2952L23.7425 25.2952C23.7935 25.2831 23.8433 25.2663 23.8913 25.2452L28.75 23.1777L28.805 23.1527C29.272 22.9194 29.6718 22.571 29.9669 22.1404C30.2621 21.7098 30.4427 21.2112 30.4918 20.6915C30.541 20.1718 30.457 19.6481 30.2478 19.1699C30.0387 18.6916 29.7112 18.2744 29.2962 17.9577H29.2913ZM2.5 20.3252H5.5V25.3252H2.5V20.3252ZM27.9287 21.3514L23.1787 23.3739L15.375 25.3252H7.5V19.7389L10.3287 16.9114C10.5138 16.7249 10.7341 16.577 10.9768 16.4764C11.2195 16.3758 11.4798 16.3244 11.7425 16.3252H18C18.3978 16.3252 18.7794 16.4832 19.0607 16.7645C19.342 17.0458 19.5 17.4274 19.5 17.8252C19.5 18.223 19.342 18.6046 19.0607 18.8859C18.7794 19.1672 18.3978 19.3252 18 19.3252H14.5C14.2348 19.3252 13.9804 19.4306 13.7929 19.6181C13.6054 19.8056 13.5 20.06 13.5 20.3252C13.5 20.5904 13.6054 20.8448 13.7929 21.0323C13.9804 21.2198 14.2348 21.3252 14.5 21.3252H18.5C18.5753 21.325 18.6503 21.3166 18.7237 21.3002L27.0987 19.3739L27.1375 19.3639C27.3932 19.293 27.666 19.3191 27.9036 19.4372C28.1412 19.5553 28.3267 19.7571 28.4245 20.0038C28.5222 20.2505 28.5253 20.5246 28.4331 20.7734C28.3409 21.0221 28.1599 21.2281 27.925 21.3514H27.9287ZM21 12.3252C21.2471 12.3255 21.4937 12.3054 21.7375 12.2652C22.0117 13.0796 22.5133 13.7985 23.1832 14.3369C23.853 14.8752 24.6629 15.2105 25.5173 15.3032C26.3716 15.3958 27.2346 15.2419 28.0042 14.8596C28.7739 14.4772 29.4179 13.8826 29.8603 13.1458C30.3026 12.4091 30.5248 11.5611 30.5005 10.7021C30.4762 9.84307 30.2064 9.00899 29.7231 8.29844C29.2398 7.5879 28.5631 7.0306 27.7731 6.69244C26.9831 6.35428 26.1127 6.2494 25.265 6.3902C25.001 5.6055 24.5256 4.90886 23.8912 4.37692C23.2568 3.84498 22.4879 3.49837 21.6692 3.37524C20.8505 3.25211 20.0137 3.35723 19.2509 3.67903C18.488 4.00083 17.8288 4.52683 17.3456 5.19915C16.8625 5.87147 16.5742 6.66405 16.5125 7.48967C16.4507 8.31528 16.618 9.14192 16.9958 9.87861C17.3735 10.6153 17.9472 11.2335 18.6537 11.6652C19.3602 12.0968 20.1721 12.3252 21 12.3252ZM28.5 10.8252C28.5 11.3197 28.3534 11.803 28.0787 12.2141C27.804 12.6252 27.4135 12.9457 26.9567 13.1349C26.4999 13.3241 25.9972 13.3736 25.5123 13.2772C25.0273 13.1807 24.5819 12.9426 24.2322 12.593C23.8826 12.2433 23.6445 11.7979 23.548 11.3129C23.4516 10.828 23.5011 10.3253 23.6903 9.86849C23.8795 9.41167 24.2 9.02123 24.6111 8.74652C25.0222 8.47182 25.5055 8.3252 26 8.3252C26.663 8.3252 27.2989 8.58859 27.7678 9.05743C28.2366 9.52627 28.5 10.1622 28.5 10.8252ZM21 5.3252C21.5454 5.32547 22.0757 5.50408 22.5101 5.8338C22.9446 6.16351 23.2593 6.62624 23.4062 7.15145C22.8941 7.51182 22.4628 7.97512 22.1399 8.51172C21.8171 9.04832 21.6097 9.64639 21.5312 10.2677C21.3567 10.3054 21.1786 10.3247 21 10.3252C20.337 10.3252 19.7011 10.0618 19.2322 9.59296C18.7634 9.12412 18.5 8.48824 18.5 7.8252C18.5 7.16216 18.7634 6.52627 19.2322 6.05743C19.7011 5.58859 20.337 5.3252 21 5.3252Z"
                    fill="#BAA7FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_83_7746">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0.5 0.325195)"
                    />
                  </clipPath>
                </defs>
              </svg>{" "}
              <p> Investor Program </p>
            </div>
            <div
              className={activeTab === 2 ? "tab tab-active" : "tab"}
              onClick={() => { handleTabClick(2); scrollDown(); }}

            >
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  d="M27 14.7677V27.3252H19V20.3252C19 20.06 18.8946 19.8056 18.7071 19.6181C18.5196 19.4305 18.2652 19.3252 18 19.3252H14C13.7348 19.3252 13.4804 19.4305 13.2929 19.6181C13.1054 19.8056 13 20.06 13 20.3252V27.3252H5V14.7677C5.00001 14.6283 5.02915 14.4905 5.08555 14.3631C5.14195 14.2356 5.22436 14.1214 5.3275 14.0277L15.3275 4.58518C15.5116 4.41759 15.7516 4.32471 16.0006 4.32471C16.2496 4.32471 16.4896 4.41759 16.6737 4.58518L26.6737 14.0277C26.7767 14.1215 26.8588 14.2358 26.915 14.3632C26.9712 14.4907 27.0001 14.6284 27 14.7677Z"
                  fill="#BAA7FF"
                />
                <path
                  d="M30 26.3251H28V14.7689C28 14.4921 27.9426 14.2183 27.8314 13.9648C27.7201 13.7114 27.5575 13.4838 27.3538 13.2964L17.3538 3.86139C17.3489 3.85713 17.3443 3.85254 17.34 3.84764C16.9718 3.51281 16.492 3.32727 15.9944 3.32727C15.4967 3.32727 15.0169 3.51281 14.6488 3.84764L14.635 3.86139L4.64625 13.2964C4.4425 13.4838 4.27985 13.7114 4.16861 13.9648C4.05737 14.2183 3.99996 14.4921 4 14.7689V26.3251H2C1.73478 26.3251 1.48043 26.4305 1.29289 26.618C1.10536 26.8056 1 27.0599 1 27.3251C1 27.5904 1.10536 27.8447 1.29289 28.0323C1.48043 28.2198 1.73478 28.3251 2 28.3251H30C30.2652 28.3251 30.5196 28.2198 30.7071 28.0323C30.8946 27.8447 31 27.5904 31 27.3251C31 27.0599 30.8946 26.8056 30.7071 26.618C30.5196 26.4305 30.2652 26.3251 30 26.3251ZM6 14.7689L6.01375 14.7564L16 5.32514L25.9875 14.7539L26.0012 14.7664V26.3251H20V20.3251C20 19.7947 19.7893 19.286 19.4142 18.9109C19.0391 18.5359 18.5304 18.3251 18 18.3251H14C13.4696 18.3251 12.9609 18.5359 12.5858 18.9109C12.2107 19.286 12 19.7947 12 20.3251V26.3251H6V14.7689ZM18 26.3251H14V20.3251H18V26.3251Z"
                  fill="#BAA7FF"
                />
              </svg>{" "}
              <p> Residential Purchase </p>
            </div>
            <div
              className={activeTab === 3 ? "tab tab-active" : "tab"}
              onClick={() => { handleTabClick(3); scrollDown(); }}

            >
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_186_1506)">
                  <path
                    opacity="0.2"
                    d="M31.2075 16.4502L27.625 20.0327C27.4375 20.2197 27.1835 20.3247 26.9188 20.3247C26.654 20.3247 26.4 20.2197 26.2125 20.0327L21.5125 15.3252L18.0125 18.8252L14.0125 14.8252L17.5125 11.3252L10.5 4.29771C12.5341 3.37877 14.8001 3.10183 16.9957 3.50383C19.1913 3.90583 21.2122 4.96766 22.7887 6.54771L31.2075 15.034C31.3007 15.1269 31.3746 15.2372 31.425 15.3587C31.4755 15.4803 31.5014 15.6105 31.5014 15.7421C31.5014 15.8737 31.4755 16.0039 31.425 16.1254C31.3746 16.2469 31.3007 16.3573 31.2075 16.4502Z"
                    fill="#BAA7FF"
                  />
                  <path
                    d="M31.9175 14.3252L23.485 5.83521C21.2329 3.58762 18.1811 2.32532 14.9993 2.32532C11.8176 2.32532 8.76581 3.58762 6.51372 5.83521L6.50247 5.84646L4.78122 7.62521C4.60292 7.81683 4.50685 8.07071 4.51364 8.33237C4.52043 8.59402 4.62954 8.84259 4.81754 9.0247C5.00554 9.20681 5.25745 9.30795 5.51919 9.30641C5.78092 9.30487 6.03163 9.20077 6.21747 9.01646L7.93372 7.24396C8.62421 6.55361 9.41217 5.96822 10.2725 5.50646L16.085 11.3252L4.08497 23.3252C3.89921 23.5109 3.75185 23.7314 3.65131 23.9741C3.55077 24.2168 3.49902 24.4769 3.49902 24.7396C3.49902 25.0023 3.55077 25.2624 3.65131 25.5051C3.75185 25.7477 3.89921 25.9682 4.08497 26.154L6.67122 28.7402C6.85694 28.926 7.07744 29.0733 7.32012 29.1739C7.56281 29.2744 7.82291 29.3262 8.0856 29.3262C8.34828 29.3262 8.60839 29.2744 8.85107 29.1739C9.09375 29.0733 9.31425 28.926 9.49997 28.7402L21.5 16.7402L23.2925 18.5327L25.5 20.7377C25.6857 20.9235 25.9062 21.0708 26.1489 21.1714C26.3916 21.2719 26.6517 21.3237 26.9143 21.3237C27.177 21.3237 27.4371 21.2719 27.6798 21.1714C27.9225 21.0708 28.143 20.9235 28.3287 20.7377L31.915 17.1515C32.2897 16.7768 32.5005 16.2688 32.5009 15.7389C32.5014 15.209 32.2915 14.7005 31.9175 14.3252ZM8.08497 27.3252L5.49997 24.739L14 16.239L16.585 18.8252L8.08497 27.3252ZM20.7925 14.6152L18 17.409L15.4137 14.8252L18.2075 12.0315C18.3004 11.9386 18.3742 11.8283 18.4245 11.7069C18.4749 11.5855 18.5008 11.4554 18.5008 11.324C18.5008 11.1925 18.4749 11.0624 18.4245 10.941C18.3742 10.8196 18.3004 10.7093 18.2075 10.6165L12.29 4.70021C13.9996 4.21871 15.8067 4.20125 17.5253 4.64964C19.244 5.09803 20.8122 5.99609 22.0687 7.25146L27.5962 12.8152L24 16.4077L22.2075 14.6152C22.1146 14.5222 22.0043 14.4485 21.8829 14.3982C21.7615 14.3478 21.6314 14.3219 21.5 14.3219C21.3686 14.3219 21.2384 14.3478 21.117 14.3982C20.9956 14.4485 20.8853 14.5222 20.7925 14.6152ZM26.9175 19.3227L25.4175 17.8227L29 14.2315L30.5 15.7315L26.9175 19.3227Z"
                    fill="#BAA7FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_186_1506">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0.5 0.325195)"
                    />
                  </clipPath>
                </defs>
              </svg>{" "}
              <p> Refinance </p>
            </div>
          </div>
        </div>
        <div id="dynamic-section">

          <div className={activeTab === 0 ? "dynamic-section active" : "dynamic-section"}>
            <motion.div className="info-section-main"
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
              <div className="info-section"

              >
                <img src="/house-placeholder.png" alt="" />
                <div className="content">
                  <h1>
                    Unbeatable <span> Interest Rates</span>
                  </h1>
                  <p>
                    Unbeatable Loans shops your rate for you with artificial intelligence.
                  </p>
                  <GetStarted openModal={openModal} />
                </div>
              </div>

            </motion.div>
            <motion.div className="cta-section"
              ref={ref2}
              initial={{
                opacity: 0,
                y: 40, // Move slightly down initially
              }}
              animate={{
                opacity: inView2 ? 1 : 0,
                y: inView2 ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="content">
                <h1>
                  Select Your Property<br /> With <span>App Extensions</span>
                </h1>
                <p>
                  Monitor rates and lock down a rate with Unbeatable Loans where the rate only floats down.
                </p>
                <div className="btn-container">
                  <GetStarted openModal={openModal} />

                  <ExtensionBtnSection />

                </div>
              </div>
              <img src="/house-grid.png" alt="" />
            </motion.div>
            <motion.div className="property-form-main"
              ref={ref3}
              initial={{
                opacity: 0,
                y: 40, // Move slightly down initially
              }}
              animate={{
                opacity: inView3 ? 1 : 0,
                y: inView3 ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <form action="">
                <div className="headings">
                  <h1>Lock Down an Unbeatable Loan</h1>
                  <p>
                    Model a purchase, investment, or refinance with artificial intelligence.
                  </p>
                </div>
                <div className="form-wrap">
                  <div className="input-container">
                    <p>Type of Home</p>
                    <input type="text" placeholder="Type of Home" />
                  </div>
                  <div className="input-container">
                    <p>Loan program</p>
                    <input type="text" placeholder="Loan program" />
                  </div>
                  <div className="input-container">
                    <p>Current housing payment</p>
                    <input type="text" placeholder="Current housing payment" />
                  </div>
                  <div className="input-container">
                    <p>Down payment goal</p>
                    <input type="text" placeholder="Down payment goal" />
                  </div>
                  <div className="input-container">
                    <p>Current financial situation</p>
                    <input
                      type="text"
                      placeholder="Optional"
                      className="desc-input"
                    />
                  </div>
                </div>
                <div className="submit-btn">Submit</div>
              </form>
              <div className="result-section">
                <img src="form-img.png" alt="" />
                <div className="result-wrap">
                  <h1>Your Estimated Price:</h1>
                  <p>Prices: 230,000$</p>
                </div>
                <div className="result-wrap">
                  <h1>Your Estimated Profit:</h1>
                  <p>Prices: 30,000$</p>
                </div>
                <div className="result-wrap">
                  <h1>Your Estimated Cash:</h1>
                  <p>Prices: 430,00$</p>
                </div>
              </div>
            </motion.div>
            <Graph />
            <motion.div className="video-section"
              ref={ref4}
              initial={{
                opacity: 0,
                y: 40, // Move slightly down initially
              }}
              animate={{
                opacity: inView4 ? 1 : 0,
                y: inView4 ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="content">
                <h1>
                  Get Approved and Make Offers with  <span>Unbeatable Loans</span>
                </h1>
                <p>Use all of the commission to reduce closing costs or down payment.</p>
                <div className="btn-container">
                  <GetStarted openModal={openModal} />

                </div>
              </div>
              <div className="video-container">
                <video
                  controls
                  alt="All the devices"
                  src="/startvideo.webm"
                  ref={videoEl}
                />
              </div>
              <div className="button-container">
                <GetStarted openModal={openModal} />

              </div>
            </motion.div>
            <Map />

          </div>
          <div className={activeTab === 1 ? "dynamic-section active" : "dynamic-section"}>
            <motion.div className="info-section-main"
              ref={ref5}
              initial={{
                opacity: 0,
                y: 40, // Move slightly down initially
              }}
              animate={{
                opacity: inView5 ? 1 : 0,
                y: inView5 ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}

            >
              <div className="info-section"

              >
                <img src="/house-placeholder.png" alt="" />
                <div className="content">
                  <h1>
                    Unbeatable <span> Investor Program</span>
                  </h1>
                  <p>
                    Unbeatable Loans has built-in loan programs for Fix and Flip,Rental Loans,New Construction and Portfolio.We also Verify and submit Cash offers.
                  </p>
                  <GetStarted openModal={openModal} />
                </div>
              </div>

            </motion.div>
            <motion.div className="cta-section"
              ref={ref6}
              initial={{
                opacity: 0,
                y: 40, // Move slightly down initially
              }}
              animate={{
                opacity: inView6 ? 1 : 0,
                y: inView6 ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="content">
                <h1>
                  Select Your Investment With our <span>App Extensions</span>
                </h1>
                <p>
                  Use free and paid market insights from numerous data sources to vet your investment after finding the investment on any listing service and adding it to Unbeatable Loans with our App or Extension.
                </p>
                <div className="btn-container">
                  <GetStarted openModal={openModal} />


                  <ExtensionBtnSection />

                </div>
              </div>
              <img src="/house-grid.png" alt="" />
            </motion.div>
            <motion.div className="property-form-main"
              ref={ref7}
              initial={{
                opacity: 0,
                y: 40, // Move slightly down initially
              }}
              animate={{
                opacity: inView7 ? 1 : 0,
                y: inView7 ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <form action="">
                <div className="headings">
                  <h1>Modal an investment with A.I from Unbeatable Loans</h1>
                  <p>
                    Investors use Unbeatable Loans to shop for properties and submit offers.
                  </p>
                </div>
                <div className="form-wrap">
                  <div className="input-container">
                    <p>Address</p>
                    <input type="text" placeholder="Address" />
                  </div>
                  <div className="input-container">
                    <p>Purpose</p>
                    <input type="text" placeholder="Purpose" />
                  </div>
                  <div className="input-container">
                    <p>Number of Properties you have invested in before</p>
                    <input type="text" placeholder="Number of Properties you have invested in before" />
                  </div>
                  <div className="input-container">
                    <p>Assets available to invest</p>
                    <input type="text" placeholder="Assets available to invest" />
                  </div>
                  <div className="input-container">
                    <p>Description of project</p>
                    <input
                      type="text"
                      placeholder="Optional"
                      className="desc-input"
                    />
                  </div>
                </div>
                <div className="submit-btn">Submit</div>
              </form>
              <div className="result-section">
                <img src="form-img.png" alt="" />
                <div className="result-wrap">
                  <h1>Your Estimated Price:</h1>
                  <p>Prices: 230,000$</p>
                </div>
                <div className="result-wrap">
                  <h1>Your Estimated Profit:</h1>
                  <p>Prices: 30,000$</p>
                </div>
                <div className="result-wrap">
                  <h1>Your Estimated Cash:</h1>
                  <p>Prices: 430,00$</p>
                </div>
              </div>
            </motion.div>
            <InvestorGraph />
            <motion.div className="video-section"
              ref={ref8}
              initial={{
                opacity: 0,
                y: 40, // Move slightly down initially
              }}
              animate={{
                opacity: inView8 ? 1 : 0,
                y: inView8 ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="content">
                <h1>
                  Get Approved for an Investor Loan and Make Offers with <span>Unbeatable Loans</span>
                </h1>
                <p>Use Unbeatable Loans as an investor to submit a verified cash offer,get an investor loan,and reduce costs.</p>
                <div className="btn-container">
                  <GetStarted openModal={openModal} />

                </div>
              </div>
              <div className="video-container">
                <video
                  controls
                  alt="All the devices"
                  src="/startvideo.webm"
                  ref={videoEl}
                />
              </div>
              <div className="button-container">
                <GetStarted openModal={openModal} />

              </div>
            </motion.div>
            <InvestorMap />

          </div>
          <div className={activeTab === 2 ? "dynamic-section active" : "dynamic-section"}>
            <motion.div className="info-section-main"
              ref={ref9}
              initial={{
                opacity: 0,
                y: 40, // Move slightly down initially
              }}
              animate={{
                opacity: inView9 ? 1 : 0,
                y: inView9 ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}

            >
              <div className="info-section"

              >
                <img src="/house-placeholder.png" alt="" />
                <div className="content">
                  <h1>
                    Buy a home entirely with<span> Unbeatable Loans</span>
                  </h1>
                  <p>
                    Keep the buyers agent commission for yourself.
                  </p>
                  <GetStarted openModal={openModal} />
                </div>
              </div>

            </motion.div>
            <motion.div className="cta-section"
              ref={ref10}
              initial={{
                opacity: 0,
                y: 40, // Move slightly down initially
              }}
              animate={{
                opacity: inView10 ? 1 : 0,
                y: inView10 ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="content">
                <h1>
                  Select Your Property<br /> With <span>App Extensions</span>
                </h1>
                <p>
                  After adding a home to the Unbeatable Loans Platform bring together market Insights from numerous data sources to make decisions on a property without an agent. Use the buyers agent&apos;s commission to save on closing costs or reduce the purchase price.
                </p>
                <div className="btn-container">
                  <GetStarted openModal={openModal} />


                  <ExtensionBtnSection />

                </div>
              </div>
              <img src="/house-grid.png" alt="" />
            </motion.div>
            <motion.div className="property-form-main"
              ref={ref11}
              initial={{
                opacity: 0,
                y: 40, // Move slightly down initially
              }}
              animate={{
                opacity: inView11 ? 1 : 0,
                y: inView11 ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <form action="">
                <div className="headings">
                  <h1>Modal a purchase with artificial intelligence.</h1>
                  <p>
                    Analyze a property with more data than a realtor would ever present to you.
                  </p>
                </div>
                <div className="form-wrap">
                  <div className="input-container">
                    <p>Property address</p>
                    <input type="text" placeholder="Address" />
                  </div>
                  <div className="input-container">
                    <p>Down Payment</p>
                    <input type="text" placeholder="Down Payment" />
                  </div>
                  <div className="input-container">
                    <p>Credit Score</p>
                    <input type="text" placeholder="Credit Score" />
                  </div>
                  <div className="input-container">
                    <p>Contingencies</p>
                    <div className="chips-container">
                      <div datatype="Appraisal" className={`chip ${activeChips.includes(0) ? 'active' : ''}`} onClick={() => handleChipClick(0)}>Appraisal</div>
                      <div datatype="Inspection" className={`chip ${activeChips.includes(1) ? 'active' : ''}`} onClick={() => handleChipClick(1)}>Inspection</div>
                      <div datatype="Financing" className={`chip ${activeChips.includes(2) ? 'active' : ''}`} onClick={() => handleChipClick(2)}>Financing</div>
                    </div>
                  </div>
                  <div className="input-container">
                    <p>Offer thoughts (optional)</p>
                    <input
                      type="text"
                      placeholder="Optional"
                      className="desc-input"
                    />
                  </div>
                </div>
                <div className="submit-btn">Submit</div>
              </form>
              <div className="result-section">
                <img src="form-img.png" alt="" />
                <div className="result-wrap">
                  <h1>Your Estimated Price:</h1>
                  <p>Prices: 230,000$</p>
                </div>
                <div className="result-wrap">
                  <h1>Your Estimated Profit:</h1>
                  <p>Prices: 30,000$</p>
                </div>
                <div className="result-wrap">
                  <h1>Your Estimated Cash:</h1>
                  <p>Prices: 430,00$</p>
                </div>
              </div>
            </motion.div>
            <ResidentialGraph />
            <motion.div className="video-section"
              ref={ref12}
              initial={{
                opacity: 0,
                y: 40, // Move slightly down initially
              }}
              animate={{
                opacity: inView12 ? 1 : 0,
                y: inView12 ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="content">
                <h1>
                  Get Approved and Make Offers with  <span>Unbeatable Loans</span>
                </h1>
                <p>Use all of the commission to reduce closing costs,down payment, or purchase price.</p>
                <div className="btn-container">
                  <GetStarted openModal={openModal} />

                </div>
              </div>
              <div className="video-container">
                <video
                  controls
                  alt="All the devices"
                  src="/startvideo.webm"
                  ref={videoEl}
                />
              </div>
              <div className="button-container">
                <GetStarted openModal={openModal} />

              </div>
            </motion.div>
            <Map />

          </div>
          <div className={activeTab === 3 ? "dynamic-section active" : "dynamic-section"}>
            <motion.div className="info-section-main"
              ref={ref13}
              initial={{
                opacity: 0,
                y: 40, // Move slightly down initially
              }}
              animate={{
                opacity: inView13 ? 1 : 0,
                y: inView13 ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}

            >
              <div className="info-section"

              >
                <img src="/house-placeholder.png" alt="" />
                <div className="content">
                  <h1>
                    Unbeatable <span> Refinance</span>
                  </h1>
                  <p>
                    Analyze a refinance with machine learning,weighing the benefits of a lower rate,debt consolidation, or property upgrades.
                  </p>
                  <GetStarted openModal={openModal} />
                </div>
              </div>

            </motion.div>
            <motion.div className="cta-section"
              ref={ref14}
              initial={{
                opacity: 0,
                y: 40, // Move slightly down initially
              }}
              animate={{
                opacity: inView14 ? 1 : 0,
                y: inView14 ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="content">
                <h1>
                  Select Your Property<br /> With <span>App Extensions</span>
                </h1>
                <p>
                  Unbeatables Loans generates precise and actionable information about your property after you select your property and pictures with the app or extension.
                </p>
                <div className="btn-container">
                  <GetStarted openModal={openModal} />


                  <ExtensionBtnSection />

                </div>
              </div>
              <img src="/house-grid.png" alt="" />
            </motion.div>
            <motion.div className="property-form-main"
              ref={ref15}
              initial={{
                opacity: 0,
                y: 40, // Move slightly down initially
              }}
              animate={{
                opacity: inView15 ? 1 : 0,
                y: inView15 ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <form action="">
                <div className="headings">
                  <h1>Property Address</h1>
                  <p>
                    Model a refinance with artificial intelligence.
                  </p>
                </div>
                <div className="form-wrap">
                  <div className="input-container">
                    <p>Address</p>
                    <input type="text" placeholder="Address" />
                  </div>
                  <div className="input-container">
                    <p>Purpose</p>
                    <input type="text" placeholder="Purpose" />
                  </div>
                  <div className="input-container">
                    <p>Current Loan Amount</p>
                    <input type="text" placeholder="Current Loan Amount" />
                  </div>
                  <div className="input-container">
                    <p>Estimated Market Value</p>
                    <input type="text" placeholder="Estimated Market Value" />
                  </div>
                  <div className="input-container">
                    <p>Description of ideal program,use of proceeds,etc.</p>
                    <input
                      type="text"
                      placeholder="Optional"
                      className="desc-input"
                    />
                  </div>
                </div>
                <div className="submit-btn">Submit</div>
              </form>
              <div className="result-section">
                <img src="form-img.png" alt="" />
                <div className="result-wrap">
                  <h1>Your Estimated Price:</h1>
                  <p>Prices: 230,000$</p>
                </div>
                <div className="result-wrap">
                  <h1>Your Estimated Profit:</h1>
                  <p>Prices: 30,000$</p>
                </div>
                <div className="result-wrap">
                  <h1>Your Estimated Cash:</h1>
                  <p>Prices: 430,00$</p>
                </div>
              </div>
            </motion.div>
            <RefinanceGraph />
            <motion.div className="video-section"
              ref={ref16}
              initial={{
                opacity: 0,
                y: 40, // Move slightly down initially
              }}
              animate={{
                opacity: inView16 ? 1 : 0,
                y: inView16 ? 0 : 40,
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="content">
                <h1>
                  Access Equity and Improve your property or loan terms with <span>Unbeatable Loans</span>
                </h1>
                <p>Ask questions and learn about your options.</p>
                <div className="btn-container">
                  <GetStarted openModal={openModal} />

                </div>
              </div>
              <div className="video-container">
                <video
                  controls
                  alt="All the devices"
                  src="/startvideo.webm"
                  ref={videoEl}
                />
              </div>
              <div className="button-container">
                <GetStarted openModal={openModal} />

              </div>
            </motion.div>
            <RefinanceMap />

          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Page;
