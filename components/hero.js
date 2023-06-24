import React, { useCallback } from "react";
import down from "../public/down.svg";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Image from "next/image";
Image

function Hero() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div>
      <Particles
        id="tsparticles"
        className="absolute top-0 left-0 w-full h-full"
        url="particles.json"
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <div className="relative h-screen flex flex-col items-center justify-center">
        <img
          // src="https://avatars.githubusercontent.com/u/36323763?v=4"
          src="ayush.jpg"
          alt="Avatar"
          className="w-1/3 rounded-full mx-auto"
        />
        <div className="p-10 text-center">
          <h1 className="font-silkscreen text-6xl">Ayush Mishra</h1>
          <h3 className="font-mono p-5">student | developer | engineer</h3>
        </div>
        <Image src={down} alt="down" className="animate-bounce" />

      </div>
    </div>
  );
}

export default Hero;
