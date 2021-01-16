import React, { useState } from "react";
import Video from "../../Video/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  Videobg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowRight,
  ArrowForward,
} from "./HeroElements";
export const Hero = ({ signToggle }) => {
  const [hover, setHover] = useState(false);
  const onHover = () => setHover(!hover);
  return (
    <HeroContainer>
      <HeroBg>
        <Videobg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Internships Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive 25% Discount for you first
          Intership.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            primary="true"
            dark="true"
            onClick={signToggle}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
