import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Stack from "../components/stack";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Head from "next/head";

export default function Home() {
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
        <meta name="google-site-verification" content="bbSA7OJb0vKJxeoj_Jan3viz1UWmRS4iEt9E3r5aCPM" />
      </Head>
      <main className="bg-black min-h-screen text-white ">
        <div className="max-w-4xl mx-auto">
          <Navbar />
          <div className="divide-y divide-zinc-600">
            <Hero />
            <Stack />
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
