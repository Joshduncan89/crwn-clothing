import React, { useState } from "react";
import FormInput from "../../components/formInput/FormInput";
import CustomButton from "../../components/formInput/CustomButton";

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
        <CustomButton type='submit'>Sign In</CustomButton>
      </form>
    </div>
  );
};

export default Signin;
