import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
const Footer = () => {
  // const [ref1, inView1] = useInView({ triggerOnce: true });

  return (
    <div className="footer-main">
      <div className="footer-wrap">
        <div className="footer-top">
          <div className="left">
            <div className="logo">
              <img src="/header-logo.png" alt="" />
              Unbeatable Loans
            </div>
          </div>
          <div className="contact-section">
            <h1>Talk to a real human being.</h1>
            <div className="contact-wrap">
              <p>
                {" "}
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M13.9963 11.37C13.8991 12.0956 13.5418 12.7613 12.9907 13.2432C12.4395 13.7252 11.7321 13.9905 11 13.99C8.74566 13.99 6.58365 13.0944 4.98959 11.5004C3.39553 9.90632 2.5 7.74432 2.5 5.48998C2.49944 4.75785 2.7648 4.05044 3.24673 3.49931C3.72865 2.94817 4.39435 2.59083 5.12 2.49373C5.22727 2.48098 5.33578 2.50332 5.4293 2.5574C5.52281 2.61148 5.5963 2.69439 5.63875 2.79373L6.95938 5.74373C6.99182 5.81949 7.00504 5.90211 6.99784 5.98422C6.99064 6.06633 6.96326 6.14538 6.91813 6.21435L5.5825 7.80248C5.53512 7.87397 5.50711 7.95652 5.50119 8.04208C5.49528 8.12764 5.51166 8.21327 5.54875 8.2906C6.06563 9.34873 7.15938 10.4294 8.22063 10.9412C8.29836 10.9782 8.38439 10.9942 8.47021 10.9877C8.55602 10.9812 8.63867 10.9525 8.71 10.9044L10.2725 9.5731C10.3417 9.52702 10.4214 9.49895 10.5042 9.49142C10.5871 9.48389 10.6705 9.49714 10.7469 9.52998L13.6944 10.8506C13.7942 10.8928 13.8776 10.9662 13.932 11.0599C13.9865 11.1536 14.009 11.2624 13.9963 11.37Z"
                    fill="#F1F5F9"
                  />
                  <path
                    d="M9.51688 2.86024C9.53385 2.79679 9.56316 2.7373 9.60313 2.68518C9.64311 2.63305 9.69296 2.58932 9.74984 2.55646C9.80672 2.52361 9.86951 2.50229 9.93464 2.49372C9.99976 2.48514 10.0659 2.48948 10.1294 2.50649C11.0563 2.74834 11.902 3.2329 12.5794 3.91027C13.2567 4.58764 13.7413 5.43333 13.9831 6.36024C14.0001 6.42369 14.0045 6.48986 13.9959 6.55499C13.9873 6.62011 13.966 6.68291 13.9332 6.73979C13.9003 6.79667 13.8566 6.84652 13.8044 6.88649C13.7523 6.92646 13.6928 6.95577 13.6294 6.97274C13.5871 6.98384 13.5437 6.98951 13.5 6.98962C13.3898 6.98962 13.2827 6.95322 13.1954 6.88608C13.108 6.81895 13.0453 6.72484 13.0169 6.61837C12.8196 5.8617 12.4242 5.17131 11.8712 4.61838C11.3183 4.06545 10.6279 3.66999 9.87126 3.47274C9.80774 3.45584 9.74819 3.42658 9.696 3.38664C9.6438 3.34669 9.6 3.29685 9.56708 3.23996C9.53417 3.18308 9.51279 3.12026 9.50418 3.0551C9.49557 2.98995 9.49988 2.92373 9.51688 2.86024ZM9.37126 5.47274C10.2331 5.70274 10.7869 6.25649 11.0169 7.11837C11.0453 7.22484 11.108 7.31895 11.1954 7.38608C11.2827 7.45322 11.3898 7.48962 11.5 7.48962C11.5437 7.48951 11.5871 7.48384 11.6294 7.47274C11.6928 7.45577 11.7523 7.42646 11.8044 7.38649C11.8566 7.34652 11.9003 7.29667 11.9332 7.23979C11.966 7.18291 11.9873 7.12011 11.9959 7.05499C12.0045 6.98986 12.0001 6.92369 11.9831 6.86024C11.6631 5.66274 10.8269 4.82649 9.62938 4.50649C9.56594 4.48955 9.49977 4.48526 9.43467 4.49388C9.36957 4.5025 9.30681 4.52386 9.24996 4.55674C9.19311 4.58962 9.1433 4.63337 9.10336 4.6855C9.06342 4.73763 9.03414 4.79711 9.01719 4.86056C9.00024 4.924 8.99596 4.99016 9.00458 5.05527C9.0132 5.12037 9.03456 5.18313 9.06744 5.23998C9.10031 5.29683 9.14407 5.34664 9.1962 5.38658C9.24833 5.42652 9.30781 5.4558 9.37126 5.47274ZM14.4925 11.4321C14.3811 12.279 13.9651 13.0564 13.3224 13.619C12.6797 14.1817 11.8542 14.4912 11 14.4896C6.03751 14.4896 2.00001 10.4521 2.00001 5.48962C1.99847 4.63543 2.30794 3.80988 2.87059 3.16718C3.43324 2.52447 4.21061 2.10856 5.05751 1.99712C5.27166 1.97097 5.48854 2.01478 5.67575 2.12202C5.86296 2.22925 6.01047 2.39416 6.09626 2.59212L7.41626 5.53899V5.54649C7.48194 5.69803 7.50906 5.86347 7.49521 6.02804C7.48136 6.19262 7.42696 6.3512 7.33688 6.48962C7.32563 6.50649 7.31376 6.52212 7.30126 6.53774L6.00001 8.08024C6.46813 9.03149 7.46313 10.0177 8.42688 10.4871L9.94813 9.19274C9.96307 9.18019 9.97872 9.1685 9.99501 9.15774C10.1333 9.0655 10.2924 9.00919 10.458 8.99391C10.6235 8.97863 10.7903 9.00487 10.9431 9.07024L10.9513 9.074L13.8956 10.3934C14.0939 10.4789 14.2592 10.6262 14.3668 10.8135C14.4744 11.0007 14.5185 11.2177 14.4925 11.4321ZM13.5 11.3071C13.5 11.3071 13.4956 11.3071 13.4931 11.3071L10.5556 9.99149L9.03376 11.2859C9.01899 11.2984 9.00355 11.3101 8.98751 11.3209C8.8436 11.4169 8.67726 11.4739 8.50472 11.4864C8.33218 11.4989 8.15936 11.4664 8.00313 11.3921C6.83251 10.8265 5.66563 9.66837 5.09938 8.51024C5.0244 8.35515 4.99075 8.18332 5.0017 8.01141C5.01265 7.83949 5.06783 7.67332 5.16188 7.52899C5.17248 7.51205 5.18439 7.49596 5.19751 7.48087L6.50001 5.93649L5.18751 2.99899C5.18726 2.9965 5.18726 2.99399 5.18751 2.99149C4.58141 3.07056 4.02493 3.36785 3.62226 3.82769C3.2196 4.28754 2.99837 4.8784 3.00001 5.48962C3.00232 7.61064 3.84592 9.64413 5.34571 11.1439C6.8455 12.6437 8.87898 13.4873 11 13.4896C11.6109 13.4917 12.2016 13.2713 12.6617 12.8695C13.1218 12.4677 13.4198 11.9121 13.5 11.3065V11.3071Z"
                    fill="#F1F5F9"
                  />
                </svg>{" "}
                +1 (703) 405-8794
              </p>
              <p>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M14 3.98975L8 9.48975L2 3.98975H14Z"
                    fill="#F1F5F9"
                  />
                  <path
                    d="M14 3.48975H2C1.86739 3.48975 1.74021 3.54242 1.64645 3.63619C1.55268 3.72996 1.5 3.85714 1.5 3.98975V12.4897C1.5 12.755 1.60536 13.0093 1.79289 13.1969C1.98043 13.3844 2.23478 13.4897 2.5 13.4897H13.5C13.7652 13.4897 14.0196 13.3844 14.2071 13.1969C14.3946 13.0093 14.5 12.755 14.5 12.4897V3.98975C14.5 3.85714 14.4473 3.72996 14.3536 3.63619C14.2598 3.54242 14.1326 3.48975 14 3.48975ZM12.7144 4.48975L8 8.81162L3.28562 4.48975H12.7144ZM13.5 12.4897H2.5V5.12662L7.66187 9.8585C7.75412 9.94317 7.87478 9.99016 8 9.99016C8.12522 9.99016 8.24588 9.94317 8.33813 9.8585L13.5 5.12662V12.4897Z"
                    fill="#F1F5F9"
                  />
                </svg>{" "}
                support@unbeatableloans.com
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="links">
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
          </div>
          <p className="webmetric">
            Realized by{" "}
            <a href="https://www.web-metric.co/" target="_blank">
              WebMertic
            </a>
          </p>
          <div className="social-icons">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12.7935C22 7.23693 17.5229 2.73242 12 2.73242C6.47715 2.73242 2 7.23693 2 12.7935C2 17.8152 5.65684 21.9776 10.4375 22.7324V15.7018H7.89844V12.7935H10.4375V10.5769C10.4375 8.05538 11.9305 6.66254 14.2146 6.66254C15.3088 6.66254 16.4531 6.85905 16.4531 6.85905V9.33503H15.1922C13.95 9.33503 13.5625 10.1106 13.5625 10.9063V12.7935H16.3359L15.8926 15.7018H13.5625V22.7324C18.3432 21.9776 22 17.8154 22 12.7935Z"
                fill="#B0B0B0"
              />
            </svg>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 3.73242H8C5.23858 3.73242 3 5.971 3 8.73242V16.7324C3 19.4938 5.23858 21.7324 8 21.7324H16C18.7614 21.7324 21 19.4938 21 16.7324V8.73242C21 5.971 18.7614 3.73242 16 3.73242ZM19.25 16.7324C19.2445 18.525 17.7926 19.9769 16 19.9824H8C6.20735 19.9769 4.75549 18.525 4.75 16.7324V8.73242C4.75549 6.93977 6.20735 5.48791 8 5.48242H16C17.7926 5.48791 19.2445 6.93977 19.25 8.73242V16.7324ZM16.75 8.98242C17.3023 8.98242 17.75 8.5347 17.75 7.98242C17.75 7.43014 17.3023 6.98242 16.75 6.98242C16.1977 6.98242 15.75 7.43014 15.75 7.98242C15.75 8.5347 16.1977 8.98242 16.75 8.98242ZM12 8.23242C9.51472 8.23242 7.5 10.2471 7.5 12.7324C7.5 15.2177 9.51472 17.2324 12 17.2324C14.4853 17.2324 16.5 15.2177 16.5 12.7324C16.5027 11.5381 16.0294 10.392 15.1849 9.5475C14.3404 8.70301 13.1943 8.22976 12 8.23242ZM9.25 12.7324C9.25 14.2512 10.4812 15.4824 12 15.4824C13.5188 15.4824 14.75 14.2512 14.75 12.7324C14.75 11.2136 13.5188 9.98242 12 9.98242C10.4812 9.98242 9.25 11.2136 9.25 12.7324Z"
                fill="#B0B0B0"
              />
            </svg>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1761 4.73242H19.9362L13.9061 11.5098L21 20.7324H15.4456L11.0951 15.139L6.11723 20.7324H3.35544L9.80517 13.4832L3 4.73242H8.69545L12.6279 9.84504L17.1761 4.73242ZM16.2073 19.1078H17.7368L7.86441 6.2717H6.2232L16.2073 19.1078Z"
                fill="#B0B0B0"
              />
            </svg>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.5 3.73242C3.67157 3.73242 3 4.40399 3 5.23242V20.2324C3 21.0608 3.67157 21.7324 4.5 21.7324H19.5C20.3284 21.7324 21 21.0608 21 20.2324V5.23242C21 4.40399 20.3284 3.73242 19.5 3.73242H4.5ZM8.52076 7.73514C8.52639 8.69139 7.81061 9.28061 6.96123 9.27639C6.16107 9.27217 5.46357 8.63514 5.46779 7.73655C5.47201 6.89139 6.13998 6.21217 7.00764 6.23186C7.88795 6.25155 8.52639 6.89702 8.52076 7.73514ZM12.2797 10.4942H9.75971H9.7583V19.054H12.4217V18.8543C12.4217 18.4744 12.4214 18.0944 12.4211 17.7143C12.4203 16.7005 12.4194 15.6856 12.4246 14.6721C12.426 14.426 12.4372 14.1701 12.5005 13.9352C12.7381 13.0577 13.5271 12.491 14.4074 12.6303C14.9727 12.7188 15.3467 13.0465 15.5042 13.5795C15.6013 13.9127 15.6449 14.2713 15.6491 14.6187C15.6605 15.6663 15.6589 16.7139 15.6573 17.7616C15.6567 18.1314 15.6561 18.5014 15.6561 18.8712V19.0526H18.328V18.8473C18.328 18.3953 18.3278 17.9434 18.3275 17.4915C18.327 16.362 18.3264 15.2325 18.3294 14.1026C18.3308 13.5921 18.276 13.0887 18.1508 12.5951C17.9638 11.861 17.5771 11.2535 16.9485 10.8148C16.5027 10.5026 16.0133 10.3015 15.4663 10.279C15.404 10.2764 15.3412 10.273 15.2781 10.2696C14.9984 10.2545 14.7141 10.2392 14.4467 10.2931C13.6817 10.4464 13.0096 10.7965 12.5019 11.4138C12.4429 11.4846 12.3852 11.5565 12.2991 11.6638L12.2797 11.6881V10.4942ZM5.68164 19.0568H8.33242V10.4998H5.68164V19.0568Z"
                fill="#B0B0B0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
