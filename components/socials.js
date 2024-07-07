import React from "react";
import {
  RiDiscordFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTelegramFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex justify-center space-x-6 mt-4">
      <a
        href="https://github.com/sudo-logic"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-500 transition-transform duration-300 transform hover:scale-125"
      >
        <RiGithubFill size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/ayush-mishra-srm/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-indigo-400 transition-transform duration-300 transform hover:scale-125"
      >
        <RiLinkedinFill size={30} />
      </a>
      <a
        href="https://discord.com/users/381451271586185227"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-indigo-400 transition-transform duration-300 transform hover:scale-125"
      >
        <RiDiscordFill size={30} />
      </a>{" "}
      <a
        href="https://telegram.me/eggxiety"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition-transform duration-300 transform hover:scale-125"
      >
        <RiTelegramFill size={30} />
      </a>
    </div>
  );
};

export default Socials;
