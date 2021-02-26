import React, { useState, useEffect } from "react";
import axios from "axios";

initialValues = {
  credentials: {
    username: "",
    password: "",
  },
  error: "",
};
const Login = () => {
  const [values, setValues] = useState(initialValues);
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(() => {
    // axios
    //   .delete(`http://localhost:5000/api/colors/1`, {
    //     headers: {
    //       authorization:
    //         "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98",
    //     },
    //   })
    //   .then((res) => {
    //     axios
    //       .get(`http://localhost:5000/api/colors`, {
    //         headers: {
    //           authorization: "",
    //         },
    //       })
    //       .then((res) => {
    //         console.log(res);
    //       });
    //     console.log(res);
    //   });
  });

  const onChange = (e) => {
    setValues({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/login/`, {
        username: "Lambda School",
        password: "i<3Lambd4",
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.payload); //double check this res.data
      })
      .catch((err) => {
        console.log(err);
        state.error = "Username or Password not valid.";
      }, []); //dependency array?
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
            value={state.username}
            onChange={onChange}
          />
        </label>
        <label htmlFor="password">
          <input
            name="password"
            type="text"
            value={state.password}
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
