import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenue,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavBtnH1,
} from "./NavbarElements";
export default function Navbar({ toggle, signToggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo onClick={toggleHome} to="/">
            Practikum
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenue>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                to="discover"
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                to="services"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                to="goal"
              >
                Our Aim
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                to="contactus"
              >
                Contact Us
              </NavLinks>
            </NavItem>
          </NavMenue>
          <NavBtn>
            <NavBtnLink onClick={signToggle}>Sign Up</NavBtnLink>
          </NavBtn>
        </NavContainer>
        <NavBtnH1
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          to="construction"
          scrollNav={scrollNav}
        >
          Under Construction
        </NavBtnH1>
      </Nav>
    </>
  );
}
