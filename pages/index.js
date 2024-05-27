// @ts-nocheck
import Head from "next/head";
import React from "react";
import About from "../components/about";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
const { Client } = require("@notionhq/client");

export async function getStaticProps() {
  // Initializing a client
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  // Retrieve experience data
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PAGE,
    });

    console.log("Experience data retrieved successfully:", response.results);

    // Process the response and return the experience data
    const experienceData = response.results.map((result) => {
      return {
        // | Company                         | Location                    | Role                    | Duration                  | Responsibilities                                                                 |

        company: result.properties.Company.title[0].plain_text,
        location: result.properties.Location.rich_text[0].plain_text,
        role: result.properties.Role.rich_text[0].plain_text,
        duration: result.properties.Duration.rich_text[0].plain_text,
        responsibilities:
          result.properties.Responsibilites.rich_text[0].plain_text.split("\n"),
      };
    });

    console.log("Experience data retrieved successfully:", experienceData);

    return {
      props: {
        experienceData,
      },
    };
  } catch (error) {
    console.error("Error retrieving experience data:", error);
    return {
      props: {
        experienceData: null,
      },
    };
  }
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Ayush Mishra</title>

        {/* Meta Tags */}
        <meta
          name="description"
          content="I'm a B.Tech CSE student with a passion for backend development, DevOps and upcoming technologies."
        />

        <meta property="og:url" content="https://ayush-mishra.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ayush Mishra" />
        <meta
          property="og:description"
          content="I'm a B.Tech CSE student with a passion for backend development, DevOps and upcoming technologies."
        />
        <meta
          property="og:image"
          content="https://ayush-mishra.vercel.app/ayush.jpg"
        />

        <meta name="twitter:card" content="summary" />
        <meta property="twitter:domain" content="ayush-mishra.vercel.app" />
        <meta
          property="twitter:url"
          content="https://ayush-mishra.vercel.app"
        />
        <meta name="twitter:title" content="Ayush mishra" />
        <meta
          name="twitter:description"
          content="I'm a B.Tech CSE student with a passion for backend development, DevOps and upcoming technologies."
        />
        <meta
          name="twitter:image"
          content="https://ayush-mishra.vercel.app/ayush.jpg"
        />
        <meta
          name="google-site-verification"
          content="bbSA7OJb0vKJxeoj_Jan3viz1UWmRS4iEt9E3r5aCPM"
        />
      </Head>
      <main className="bg-black min-h-screen text-white  ">
        <div className="max-w-4xl mx-auto">
          <Navbar />
          <div className="divide-y divide-zinc-600   font-mono ">
            <Hero />
            <div className="py-20">
              <About />
            </div>
            <div className="py-20">
              <Experience {...props} />
            </div>
            {/* <div className="py-20">
              <Contact />
            </div> */}
            <div className="">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
