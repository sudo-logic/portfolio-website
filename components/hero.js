import Image from "next/image";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className=" flex justify-center items-center h-screen">
      <Particles
        id="tsparticles"
        className="absolute top-0 left-0 w-screen h-full"
        url="particles.json"
        init={particlesInit}
      />
      <div className="relative flex flex-col items-center justify-center h-full">
        <div className="relative w-72">
          <Image
            src="/Ayush Mishra.png"
            alt="Ayush Mishra"
            width={400}
            height={400}
            layout="responsive"
            objectFit="contain"
            className="rounded-full"
            priority={true}
          />
        </div>
        <div className="p-10 text-center">
          <h1 className="font-silkscreen text-2xl md:text-4xl">Ayush Mishra</h1>
          <h2 className="font-mono p-5">
            Generalist Developer - Fueled by Curiosity
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
