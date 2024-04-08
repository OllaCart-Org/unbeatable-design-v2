import { useState, useEffect } from 'react';

const HeroText = () => {
  const texts = [
    "AI-powered home shopping: Get mortgage approval all agent-free for big savings",
    "Make an offer without an agent and save.",
    "Make an offer without an agent and save.",
    "Make an offer without an agent and save."
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
    <div className="subtext-textAnimation">
      {/* <span className={styles.unbeatableLoans}>Unbeatable Loans</span> */}
      <span className="sub-text" style={{ opacity: showText ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>{texts[index]}</span>
    </div>
  );
};

export default HeroText;