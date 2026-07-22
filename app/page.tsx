import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Github from "@/components/github/Github";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-[#F8FAFC] selection:bg-[#3B82F6] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About & Philosophy Section */}
      <About />

      {/* Professional Experience Section */}
      <Experience />

      {/* Technical Skills Section */}
      <Skills />

      {/* Featured Projects Section */}
      <Projects />

      {/* GitHub Activity & Open Source Section */}
      <Github />

      {/* Contact Form Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}