import React, { useState } from "react";

const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    userName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { userName, email, password, password2 } = registerUser;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(registerUser);
  };

  const changeHandler = (e) => {
    return setRegisterUser(...registerUser, {
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='sign-in'>
      <h2>Register an account</h2>

      <form onSubmit={submitHandler}>
        <label htmlFor='userName'>Username</label>
        <input
          type='userName'
          name='userName'
          required
          value={userName}
          onChange={changeHandler}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          required
          value={email}
          onChange={changeHandler}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          required
          value={password}
          onChange={changeHandler}
        />
        <label htmlFor='password2'>Password</label>
        <input
          type='password2'
          name='password2'
          required
          value={password2}
          onChange={changeHandler}
        />

        <input type='submit' value='Submit Form' />
      </form>
    </div>
  );
};

export default Register;
