import React, { useEffect, useState } from "react";
import { FaSortDown } from "react-icons/fa";

const ScrollDownIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowIndicator(false);
      } else {
        setShowIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showIndicator && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaSortDown size={30} />
        </div>
      )}
    </>
  );
};

export default ScrollDownIndicator;
