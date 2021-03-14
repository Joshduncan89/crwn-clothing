import React, { useState } from "react";
import FormInput from "../formElements/FormInput";
import CustomButton from "../formElements/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./Sign-In.styles.scss";

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className='sign-in'>
      <h2>Login</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={submitHandler}>
        <FormInput
          type='email'
          name='email'
          id='email'
          label='Email'
          required
          value={email}
          handleChange={changeHandler}
        />
        <FormInput
          type='password'
          name='password'
          id='password'
          label='Password'
          required
          value={password}
          handleChange={changeHandler}
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Signin;
