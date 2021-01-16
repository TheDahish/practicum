import React, { useState } from "react";
import { Footer } from "../Components/Footer/Footer";
import { Hero } from "../Components/HeroSection/Hero";
import Contactus from "../Components/Contactus/Contactus";
import {
  homeObjectFive,
  homeObjectFour,
  homeObjectOne,
  homeObjectThree,
  homeObjectTwo,
} from "../Components/InfoSection/Data";
import { Info } from "../Components/InfoSection/Info";
import Navbar from "../Components/Navbar/Navbar";
import { Services } from "../Components/Services/Services";
import Sidebar from "../Components/Sidebar/Sidebar";
import { SignPop } from "../Components/SignPop/SignPop";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [isSignup, setIsSignup] = useState(false);
  const signToggle = () => setIsSignup(!isSignup);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} signToggle={signToggle} />
      <SignPop isSignup={isSignup} signToggle={signToggle} />
      <Navbar toggle={toggle} signToggle={signToggle} />
      <Hero signToggle={signToggle} />
      <Info {...homeObjectOne} clickFuncton={signToggle} />
      <Info {...homeObjectTwo} />
      <Services />
      <Info {...homeObjectThree} />
      <Info {...homeObjectFour} />
      <Contactus {...homeObjectFive} />
      <Footer />
    </>
  );
}
