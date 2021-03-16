import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Login.styles.scss";
import Signin from "../../components/signIn/Signin";
import Register from "../../components/signIn/Register";

const LoginPage = ({ history }) => {
  const auth = useSelector((state) => state.authReducer);
  const { currentUser } = auth;

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  });

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
