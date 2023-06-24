import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <div>
      <div className="flex w-full justify-between items-center px-20 py-10 rounded-md">
        <div>
          <h1 className="font-thin text-4xl font-mono tracking-tighter">
            Hi, I&apos;m Ayush
          </h1>
          <h3 className="text-base font-light pr-20">
            Generalist Developer, interested in Web Development, DevOps, Machine
            Learning and Cyber Security.
          </h3>
        </div>

        <img
          src="https://avatars.githubusercontent.com/u/36323763?v=4"
          alt="Avatar"
          className="h-32 rounded-full"
        />
      </div>
    </div>
  );
}

export default Hero;
