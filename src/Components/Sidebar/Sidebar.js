import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenue,
  SidebarWrapper,
  SidebarLink,
  SidebarRoute,
  SidebarBtnWarp,
} from "./SidebarElements";
export default function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenue>
          <SidebarLink
            onClick={toggle}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="discover"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Discover
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Services
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="team"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Team
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="contactus"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact us
          </SidebarLink>
        </SidebarMenue>
        <SidebarBtnWarp>
          <SidebarRoute to="/signup">Sign Up</SidebarRoute>
        </SidebarBtnWarp>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
