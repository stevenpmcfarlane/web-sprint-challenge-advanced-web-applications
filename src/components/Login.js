import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const initialValues = {
  credentials: {
    username: "",
    password: "",
  },
  error: "",
};
const Login = () => {
  const [values, setValues] = useState(initialValues);
  const history = useHistory();

  const onChange = (e) => {
    setValues({
      ...values,
      credentials: {
        ...values.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const onSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/login/`, values.credentials)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.payload); //double check this res.data
        history.push("/BubblePage");
      })
      .catch((err) => {
        console.log(err);
        values.error = "Username or Password not valid.";
      });
  };

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        {/* <p>Build a login page here</p> */}
      </h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">
          <input
            name="username"
            type="text"
            value={values.credentials.username}
            onChange={onChange}
          />
        </label>
        <label htmlFor="password">
          <input
            name="password"
            type="text"
            value={values.credentials.password}
            onChange={onChange}
          />
        </label>

        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
