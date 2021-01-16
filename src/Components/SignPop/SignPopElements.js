import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
export const Blackdot = styled.div`
  display: ${({ isSignup }) => (isSignup ? "" : "none")};
  background: black;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 998;
  opacity: ${({ isSignup }) => (isSignup ? "60%" : "0")};
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 100px solid gray;
  border-right: 100px solid transparent;
`;
export const SignpopContainer = styled.div`
  display: ${({ isSignup }) => (isSignup ? "" : "none")};
  position: fixed;
  z-index: 999;
  width: 400px;
  height: 200px;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  left: 40%;

  transition: 0.3s ease-in-out;
  opacity: ${({ isSignup }) => (isSignup ? "100%" : "0")};

  top: ${({ isSignup }) => (isSignup ? "30%" : "-100%")};

  @media screen and (max-width: 768px) {
    display: ${({ isSignup }) => (isSignup ? "" : "none")};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: whitesmoke;
`;

export const PopIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SignPopWrap = styled.div`
  color: #fff;
  background: #01bf71;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Form = styled.form`
  background-color: #010111;
  /* background-image: -webkit-linear-gradient(-45deg, black 50%, #01bf71 50%); */

  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #01bf71;
  /* background-image: -webkit-linear-gradient(-45deg, black 50%, #01bf71 50%); */

  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
