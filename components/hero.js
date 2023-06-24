import React, { useState, useEffect, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        className="absolute top-0 left-0 w-full h-full"
        url="particles.json"
        init={particlesInit}
      />
      <div className="relative h-screen flex flex-col items-center justify-center">
        <img
          src="ayush.jpg"
          alt="Avatar"
          className="w-1/3 rounded-full mx-auto"
        />
        <div className="p-10 text-center">
          <h1 className="font-silkscreen text-6xl">Ayush Mishra</h1>
          <h3 className="font-mono p-5">
            Generalist Developer - Fueled by Curiosity
          </h3>
        </div>
        {scrollPosition < 100 && (
          <a href="#stack">
            <img
              src="down.svg"
              style={{ fill: "white" }}
              className="animate-bounce absolute bottom-0"
            />
          </a>
        )}
      </div>
    </div>
  );
}

export default Hero;
