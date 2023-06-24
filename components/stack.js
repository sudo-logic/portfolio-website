import React from "react";

function stack() {
  return (
    <div>
      {" "}
      <div className="flex flex-col w-full justify-between px-20 py-10 rounded-md ">
        <div>
          <h1 className="font-thin text-4xl font-mono tracking-tighter">
            My Tech Stack
          </h1>
          <h3 className="text-base font-light pr-20"></h3>
        </div>

        <div className="flex flex-col justify-center w-full divide-zinc-700 divide-y divide-dotted">
          <div className="flex flex-wrap py-2 pr-2 ">
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-Python-black?style=flat-square&logo=Python"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js"
            />
          </div>
          <div className="flex flex-wrap py-2 pr-2">
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-Heroku-black?style=flat-square&logo=heroku"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-Docker-black?style=flat-square&logo=docker"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-Digital%20Ocean-black?style=flat-square&logo=digitalocean"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/Amazon%20AWS-black?style=flat-square&logo=amazon-aws"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/Microsoft%20Azure-black?style=flat-square&logo=microsoft-azure"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/Google%20Cloud-black?style=flat-square&logo=google-cloud"
            />
          </div>
          <div className="flex flex-wrap py-2 pr-2 ">
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-Git-black?style=flat-square&logo=git"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=github"
            />
          </div>
          <div className="flex flex-wrap py-2 pr-2 ">
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-React-black?style=flat-square&logo=react"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5&logoColor=white"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-Bootstrap-black?style=flat-square&logo=bootstrap"
            />
          </div>
          <div className="flex flex-wrap py-2 pr-2 ">
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-Redis-black?style=flat-square&logo=Redis"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-ElasticSearch-black?style=flat-square&logo=elasticsearch"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-GraphQL-black?style=flat-square&logo=graphql"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-PostgreSQL-black?style=flat-square&logo=postgresql"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql"
            />
            <img
              className="rounded-sm h-6"
              src="https://img.shields.io/badge/SQLite-black?style=flat-square&logo=sqlite"
            />
          </div>
        </div>
      </div>
      <div className="flex  w-full justify-between items-center px-20 py-10 rounded-md ">
        <div className="basis-1/2">
          {/* <h1 className="font-thin text-4xl font-mono tracking-tighter">Hi, I'm Ayush</h1>
      <h3 className="text-base font-light pr-20">
        Python Developer, interested in Web Development, DevOps, Machine
        Learning and Cyber Security.
      </h3> */}
          <h1 className="font-thin text-4xl font-mono tracking-tighter">
            My GitHub Stats
          </h1>
          <h3 className="text-base font-light pr-20"></h3>
        </div>

        <div className="flex flex-col basis-1/2 items-center justify-center w-full">
          <div>
            <img
              className=""
              src="https://github-readme-stats.vercel.app/api?username=sudo-logic&show_icons=true&theme=gotham&hide_border=true&count_private=true"
            />
          </div>
          <div>
            <img
              className=""
              src="https://github-readme-streak-stats.herokuapp.com?user=sudo-logic&theme=gotham&hide_border=true&date_format=M%20j%5B%2C%20Y%5D"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default stack;
