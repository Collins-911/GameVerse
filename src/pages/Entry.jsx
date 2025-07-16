import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../src/css/entry.css';

export default function EntryPage() {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsExiting(true); // Trigger exit animation

    // Wait for animation to complete before navigating
    setTimeout(() => {
      navigate("/login");
    }, 600); // Match CSS animation duration
  };

  const title = "GameVerse";

  return (
    <div className={`entry-container ${isExiting ? "exit" : ""}`}>
      <h1 className="entry-title">
        {title.split("").map((letter, index) => (
          <span
            key={index}
            className={`letter letter-${index} ${index >= 4 ? 'verse' : 'game'}`}
          >
            {letter}
          </span>
        ))}
      </h1>

      {showButton && (
        <button className="entry-button fade-in" onClick={handleEnter}>
          Enter
        </button>
      )}
    </div>
  );
}
