import React from "react";
import "./Login.styles.scss";
import Signin from "../../components/signIn/Signin";
import Register from "../../components/signIn/Register";

const LoginPage = () => {
  return (
    <>
      <Signin />
      <Register />
    </>
  );
};

export default LoginPage;
