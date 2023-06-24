import React from "react";

function contact() {
  return (
    <div>
      <div className="flex flex-col w-full justify-between px-20 py-10 rounded-md ">
        <div>
          <h1 className="font-thin text-4xl font-mono tracking-tighter">
            Contact Me
          </h1>
          <h3 className="text-base font-light pr-20"></h3>
        </div>

        <div className="flex flex-col justify-center w-full divide-zinc-700 divide-y divide-dotted">
          <div className="flex flex-wrap py-2 pr-2 pt-2">
            <a
              href="https://github.com/sudo-logic"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white"
                alt="github"
                className="rounded-sm pr-5"
              />
            </a>
            <a
              href="https://linkedin.com/in/ayush-mishra-srm"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"
                alt="linkedin"
                className="rounded-sm pr-5"
              />
            </a>
            <a
              href="https://instagram.com/_logeek_"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.shields.io/badge/instagram-%23000000.svg?&style=for-the-badge&logo=instagram&logoColor=white"
                alt="instagram"
                className="rounded-sm pr-5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
