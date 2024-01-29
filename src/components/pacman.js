import React, { useEffect, useState } from "react";
import "./pacman.css"; // Make sure to create a separate CSS file for styling

const Pacman = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Adjust the delay as needed
    };

    // Add a scroll event listener to handle scrolling
    window.addEventListener("scroll", handleScroll);

    // Initial check to set visibility on mount
    handleScroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  // Array of bottom positions for pacballs
  const pacballPos = ["190px", "120px"];

  return (
    <div className="Pacman-box">
      <div className={`pacman${isVisible ? " visible" : ""}`}>
        {/* Pac-Man shape CSS */}
      </div>
      {pacballPos.map((right, index) => (
        <div
          key={index}
          className={`pacball${isVisible ? " visible" : ""}`}
          style={{ right: right }}
        >
          {/* Pac-Ball shape CSS */}
        </div>
      ))}
    </div>
  );
};

export default Pacman;
