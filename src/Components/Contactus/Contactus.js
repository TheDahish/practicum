import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Column2,
  Img,
  ImgWrap,
  FormButton,
  Form,
  FormLabel,
  FormInput,
  Messageinput,
} from "../InfoSection/InfoElements";
export default function Contactus({
  lightBg,
  id,
  imgStart,
  topLine,
  img,
  alt,
}) {
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Form action="#">
                  <>
                    <TopLine>{topLine}</TopLine>
                    <FormLabel htmlFor="for">Email</FormLabel>
                    <FormInput
                      //   onChange={handleEmail}
                      type="email"
                      required
                    />
                    <FormLabel htmlFor="for">Name</FormLabel>
                    <FormInput
                      //   onChange={handleEmail}
                      type="text"
                      required
                    />
                    <FormLabel htmlFor="for">Message</FormLabel>
                    <Messageinput
                      //   onChange={handleEmail}
                      type="text"
                      required
                    />
                    <FormButton type="submit">Send</FormButton>{" "}
                  </>
                </Form>
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
}
