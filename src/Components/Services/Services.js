import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesCard,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";
import Icon1 from "../../images/icon1.svg";
import Icon2 from "../../images/icon2.svg";
import Icon3 from "../../images/icon3.svg";
export const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Find Internships</ServicesH2>
          <ServicesP>
            We help find Intenships that best suit your interests in a fast
            guaranteed way
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Career Paths</ServicesH2>
          <ServicesP>
            Reach your life goals faster with our help to decide the career path
            you should follow
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Certification</ServicesH2>
          <ServicesP>
            Receive a nation recognized certificate upon Internship completion
            to showcase your skills to your future employers{" "}
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};
