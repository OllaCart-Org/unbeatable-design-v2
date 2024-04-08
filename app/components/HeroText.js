import { useState, useEffect } from 'react';

const HeroText = () => {
  const texts = [
    "Your Journey Begins Here",
    "for Cash Offers",
    "for Investors",
    "for First Time Homebuyers"
  ];
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setShowText(true);
      }, 500); // Adjust the delay to match the transition duration
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="textAnimation">
      <span className="unbeatableLoans">Unbeatable Loans</span>
      <span className="text" style={{ opacity: showText ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>{texts[index]}</span>
    </div>
  );
};

export default HeroText;