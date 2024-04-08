import React from "react";

const Signup = ({ isOpen, closeModal }) => {
  return (
    <div className={`signup-modal ${isOpen ? "open" : ""}`}>
      <form action="">
        <div className="headings">
          <h1>
            Welcome to <span> Unbeatable loans </span>
          </h1>
          <p>Get started by creating an account. It’s free. </p>
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
        </div>
        <div className="signup-btn">Signup</div>
        <p>
          By continuing, you agree to our <span> Terms of services </span> and{" "}
          <span> Privacy Policy </span>.
        </p>
      </form>
    </div>
  );
};

export default Signup;
