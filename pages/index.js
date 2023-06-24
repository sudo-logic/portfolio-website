import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Stack from "../components/stack";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <body className="bg-black min-h-screen text-white ">
      <div className="max-w-4xl mx-auto">
        <Navbar />
        <div className="divide-y divide-zinc-600">
          <Hero />
          <Stack />
          <Contact />
          <Footer />
        </div>
      </div>
    </body>
  );
}
