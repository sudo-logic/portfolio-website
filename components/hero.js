import Image from "next/image";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ScrollDownIndicator from "./scroll-indicator";
import Socials from "./socials";

function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
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
          <div className="flex justify-center gap-4">
            <a
              className="cursor-pointer border p-3 "
              href="mailto:ayu.mis2228@gmail.com"
            >
              Contact
            </a>
            <a
              className="cursor-pointer border p-3 "
              href="https://drive.google.com/file/d/12tlFbHpnBxgUlCS7Glo_4_IyuEb8wid1/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
          <Socials />
        </div>
      </div>
      <ScrollDownIndicator />
    </div>
  );
}

export default Hero;
