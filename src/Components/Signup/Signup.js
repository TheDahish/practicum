import React, { useState } from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
} from "./SignupElements";

import firebase from "../Firebase";

const db = firebase.ref("/signup");

const Signup = () => {
  const [submited, setSubmited] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    if (email !== "" && password !== "") {
      setSubmited(true);
      const user = {
        email: email,
        password: password,
      };
      db.child("Users").push(user);
    } else alert("Please fill in the required forms");
  };
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Practicum</Icon>

        <FormContent>
          <Form action="#">
            {submited ? (
              <FormH1>
                Thank You, we will contact you when the product is finished
              </FormH1>
            ) : (
              <>
                <FormH1>Sign up</FormH1>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput onChange={handleEmail} type="email" required />
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput onChange={handlePassword} type="password" required />
                <FormButton onClick={handleSubmit} type="submit">
                  Sign Up
                </FormButton>{" "}
              </>
            )}
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signup;
