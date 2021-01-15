import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;

  @media screen and (max-width: 768px) {
    height: 1200px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  height: 100%;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const ServicesIcon = styled.img`
  border-radius: 90px;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #000;
`;
export const ServicesP = styled.p`
  white-space: nowrap;
  font-size: 1rem;
  text-align: center;
  color: #000;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

export const SocialMediaicon = styled.a`
  color: #000;
  font-size: 40px;
  cursor: pointer;
`;

export const Social = styled.div`
  height: 40px;
  width: 100%;
  align-self: flex-end;
  justify-self: end;
  padding-top: 20px;

  @media screen and (max-width: 768px) {
    padding-top: 10px;
  }
`;
