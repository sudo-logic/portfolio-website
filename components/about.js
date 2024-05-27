import React from "react";

export default function About() {
  return (
    <section
      className="grid gap-6 md:gap-8 items-center justify-center"
      id="about"
    >
      <div className="space-y-2 text-center">
        <div className="flex items-center justify-center gap-2">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg> */}
          <h1 className="text-3xl font-silkscreen">About Me</h1>
        </div>
        <p>
          {`I'm a passionate software engineer with a focus on building beautiful
          and functional web applications. I have experience working with a
          variety of technologies, including:`}
        </p>
      </div>
      <div className="flex flex-wrap  justify-center">
        <div>
          <div className="flex flex-col justify-center w-full divide-zinc-700 divide-y divide-dotted">
            <div className="flex flex-wrap py-2 pr-2 ">
              <img
                className="rounded-sm h-6"
                alt="python"
                src="https://img.shields.io/badge/-Python-black?style=flat-square&logo=Python"
              />
              <img
                className="rounded-sm h-6"
                alt="node.js"
                src="https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js"
              />
            </div>
            <div className="flex flex-wrap py-2 pr-2">
              <img
                className="rounded-sm h-6"
                alt="heroku"
                src="https://img.shields.io/badge/-Heroku-black?style=flat-square&logo=heroku"
              />
              <img
                className="rounded-sm h-6"
                alt="docker"
                src="https://img.shields.io/badge/-Docker-black?style=flat-square&logo=docker"
              />
              <img
                className="rounded-sm h-6"
                alt="digitalocean"
                src="https://img.shields.io/badge/-Digital%20Ocean-black?style=flat-square&logo=digitalocean"
              />
              <img
                className="rounded-sm h-6"
                alt="amazon-aws"
                src="https://img.shields.io/badge/Amazon%20AWS-black?style=flat-square&logo=amazon-aws"
              />
              <img
                className="rounded-sm h-6"
                alt="microsoft-azure"
                src="https://img.shields.io/badge/Microsoft%20Azure-black?style=flat-square&logo=microsoft-azure"
              />
              <img
                className="rounded-sm h-6"
                alt="google-cloud"
                src="https://img.shields.io/badge/Google%20Cloud-black?style=flat-square&logo=google-cloud"
              />
            </div>
            <div className="flex flex-wrap py-2 pr-2 ">
              <img
                className="rounded-sm h-6"
                alt="git"
                src="https://img.shields.io/badge/-Git-black?style=flat-square&logo=git"
              />
              <img
                className="rounded-sm h-6"
                alt="github"
                src="https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=github"
              />
            </div>
            <div className="flex flex-wrap py-2 pr-2 ">
              <img
                className="rounded-sm h-6"
                alt="react"
                src="https://img.shields.io/badge/-React-black?style=flat-square&logo=react"
              />
              <img
                className="rounded-sm h-6"
                alt="html"
                src="https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5&logoColor=white"
              />
              <img
                className="rounded-sm h-6"
                alt="css"
                src="https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3"
              />
              <img
                className="rounded-sm h-6"
                alt="bootstrap"
                src="https://img.shields.io/badge/-Bootstrap-black?style=flat-square&logo=bootstrap"
              />
            </div>
            <div className="flex flex-wrap py-2 pr-2 ">
              <img
                className="rounded-sm h-6"
                alt="mongodb"
                src="https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb"
              />
              <img
                className="rounded-sm h-6"
                alt="redis"
                src="https://img.shields.io/badge/-Redis-black?style=flat-square&logo=Redis"
              />
              <img
                className="rounded-sm h-6"
                alt="elasticsearch"
                src="https://img.shields.io/badge/-ElasticSearch-black?style=flat-square&logo=elasticsearch"
              />
              <img
                className="rounded-sm h-6"
                alt="graphql"
                src="https://img.shields.io/badge/-GraphQL-black?style=flat-square&logo=graphql"
              />
              <img
                className="rounded-sm h-6"
                alt="postgresql"
                src="https://img.shields.io/badge/-PostgreSQL-black?style=flat-square&logo=postgresql"
              />
              <img
                className="rounded-sm h-6"
                alt="mysql"
                src="https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql"
              />
              <img
                className="rounded-sm h-6"
                alt="sqlite"
                src="https://img.shields.io/badge/SQLite-black?style=flat-square&logo=sqlite"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
