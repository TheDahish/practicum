import React from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Subtitle,
  Heading,
  BtnWrap,
  Column2,
  Img,
  ImgWrap,
} from "./InfoElements";

export const Info = ({
  lightBg,
  id,
  imgStart,
  topLine,
  headLine,
  description,
  img,
  alt,
  buttonLabel,
  darkText,
  lightText,
  primary,
  dark,
  link,
  clickFuncton,
}) => {
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button primary={primary} dark={dark} onClick={clickFuncton}>
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};
