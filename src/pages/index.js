import React, { useState } from "react";
import { Footer } from "../Components/Footer/Footer";
import { Hero } from "../Components/HeroSection/Hero";
import { homeObjectOne, homeObjectTwo } from "../Components/InfoSection/Data";
import { Info } from "../Components/InfoSection/Info";
import Navbar from "../Components/Navbar/Navbar";
import { Services } from "../Components/Services/Services";
import Sidebar from "../Components/Sidebar/Sidebar";
import Team from "../Components/Team/Team";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...homeObjectOne} />
      <Info {...homeObjectTwo} />
      <Services />
      <Team />
      <Footer />
    </>
  );
}
