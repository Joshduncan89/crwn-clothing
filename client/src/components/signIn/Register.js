import React, { useState } from "react";
import FormInput from "../formElements/FormInput";
import CustomButton from "../formElements/CustomButton";
import "./Sign-In.styles.scss";
import { auth, createUserProfile } from "../../firebase/firebase.utils";

const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    displayName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { displayName, email, password, password2 } = registerUser;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert("password doesnt match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName });

      setRegisterUser({
        displayName: "",
        email: "",
        password: "",
        password2: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    setRegisterUser({
      ...registerUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='sign-up'>
      <h2>I do not have an account</h2>
      <span>Register an account</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label='User Name'
          type='text'
          name='displayName'
          required
          value={displayName}
          onChange={changeHandler}
        />

        <FormInput
          label='Email'
          type='email'
          name='email'
          required
          value={email}
          onChange={changeHandler}
        />

        <FormInput
          label='Password'
          type='password'
          name='password'
          required
          value={password}
          onChange={changeHandler}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          name='password2'
          required
          value={password2}
          onChange={changeHandler}
        />
        <div className='buttons'>
          <CustomButton type='submit' onClick={changeHandler}>
            {" "}
            Register Account
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Register;
