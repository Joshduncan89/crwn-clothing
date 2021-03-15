import React from "react";
import "./Login.styles.scss";
import Signin from "../../components/signIn/Signin";
import Register from "../../components/signIn/Register";

const LoginPage = () => {
  return (
    <>
      <div className='sign-in-and-sign-up'>
        <Signin />
        <Register />
      </div>
    </>
  );
};

export default LoginPage;
