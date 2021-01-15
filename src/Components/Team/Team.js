import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesCard,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
  SocialMediaWrap,
  SocialMediaicon,
  Social,
} from "./TeamElemetns";
import Icon1 from "../../images/dahish.jpg";
import Icon2 from "../../images/seif.jpeg";
import Icon3 from "../../images/joe.jfif";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
export default function Team() {
  return (
    <ServicesContainer id="team">
      <ServicesH1>Our Team</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Seif Atef</ServicesH2>
          <ServicesP>Founder</ServicesP>
          <Social>
            <SocialMediaWrap>
              <SocialMediaicon
                href="//www.facebook.com"
                target="_blank"
                aria-label="fb"
              >
                {" "}
                <FaFacebook />
              </SocialMediaicon>
              <SocialMediaicon
                href="//www.linkedin.com"
                target="_blank"
                aria-label="fb"
              >
                {" "}
                <FaLinkedin />
              </SocialMediaicon>
            </SocialMediaWrap>
          </Social>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Khaled Aldahish</ServicesH2>
          <ServicesP>Co-Founder, Software Arctcit</ServicesP>
          <Social>
            <SocialMediaWrap>
              <SocialMediaicon
                href="//www.facebook.com"
                target="_blank"
                aria-label="fb"
              >
                {" "}
                <FaFacebook />
              </SocialMediaicon>
              <SocialMediaicon
                href="//www.linkedin.com"
                target="_blank"
                aria-label="fb"
              >
                {" "}
                <FaLinkedin />
              </SocialMediaicon>
            </SocialMediaWrap>
          </Social>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Youssef Yasser</ServicesH2>
          <ServicesP>Co-Founder</ServicesP>
          <Social>
            <SocialMediaWrap>
              <SocialMediaicon
                href="//www.facebook.com"
                target="_blank"
                aria-label="fb"
              >
                {" "}
                <FaFacebook />
              </SocialMediaicon>
              <SocialMediaicon
                href="//www.linkedin.com"
                target="_blank"
                aria-label="fb"
              >
                {" "}
                <FaLinkedin />
              </SocialMediaicon>
            </SocialMediaWrap>
          </Social>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}
