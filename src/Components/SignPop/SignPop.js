import React, { useState } from "react";
import {
  SignpopContainer,
  PopIcon,
  FormContent,
  FormWrap,
  FormLabel,
  FormInput,
  FormButton,
  FormH1,
  Form,
  CloseIcon,
  Blackdot,
  Triangle,
} from "./SignPopElements";
import firebase from "../Firebase";

const db = firebase.ref("/signup");

export const SignPop = ({ isSignup, signToggle }) => {
  const [submited, setSubmited] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    if (email !== "") {
      setSubmited(true);
      const user = {
        email: email,
      };
      db.child("Users").push(user);
    }
  };
  return (
    <>
      <Blackdot onClick={signToggle} isSignup={isSignup} />
      <SignpopContainer isSignup={isSignup}>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <PopIcon>
                <CloseIcon onClick={signToggle} />
              </PopIcon>
              {submited ? (
                <FormH1>
                  Thank You, we will contact you when the product is finished
                </FormH1>
              ) : (
                <>
                  <FormH1>Sign up</FormH1>
                  <FormLabel htmlFor="for">Email</FormLabel>
                  <FormInput onChange={handleEmail} type="email" required />
                  <FormButton onClick={handleSubmit} type="submit">
                    Submit
                  </FormButton>{" "}
                </>
              )}
            </Form>
          </FormContent>
        </FormWrap>
      </SignpopContainer>
    </>
  );
};
