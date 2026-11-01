import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Architecture from "@/components/architecture/Architecture";
import Github from "@/components/github/Github";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-[#F8FAFC] selection:bg-[#3B82F6] selection:text-white">
      {/* Sticky Navigation with ScrollSpy and CV Download */}
      <Navbar />

      {/* Hero Section with Command Line Sequence & Brand Positioning */}
      <Hero />

      {/* About & Engineering Philosophy */}
      <About />

      {/* Professional Experience (Nexrupt Technologies & Project Track Record) */}
      <Experience />

      {/* Technical Skills & Competencies (Categorized, Zero Arbitrary Progress Bars) */}
      <Skills />

      {/* Featured Projects (Corona Nissan Live Dealership, ISP Platform, Restaurant API, HR Portal) */}
      <Projects />

      {/* Interactive Backend Architecture & REST API Playground */}
      <Architecture />

      {/* GitHub Activity & Version Control */}
      <Github />

      {/* Professional Contact Hub */}
      <Contact />

      {/* Developer Footer */}
      <Footer />
    </main>
  );
}