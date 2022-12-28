import { useState, useContext } from "react";
import { GlobalContext } from "../context/context";
import { Button, TextField } from "@mui/material";

import "./login.css";
import axios from "axios";

const baseUrl = "http://localhost:5001";

function Login() {
  let { state, dispatch } = useContext(GlobalContext);

  const [result, setResult] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post(
        `${baseUrl}/login`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: "USER_LOGIN",
        payload: null,
      });

      console.log("login successful");
      setResult("login successful");
    } catch (e) {
      console.log("e: ", e);
    }

    // e.reset();
  };


//   if(document.getElementById('exampleInputEmail1') === ""){
// '<span> </span>'
    
//   }
  return (
    <>
      <div className="container">
     <div className="row">
      <div className="col">
           {/* <h4>This is Login page</h4> */}
           <h2>This is Login page</h2>
        {state.text}
        {/* 
      <form onSubmit={loginHandler} className="loginForm">
        <TextField
          className="TextField"
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          name="username"
          placeholder="email"
          autoComplete="username"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <br />

        <TextField
          className="TextField"
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          name="current-password"
          autoComplete="current-password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <br />
        <Button variant="outlined" type="submit">
          Login
        </Button>
      </form> */}

        {/* <p>{result}</p> */}

        <form onSubmit={loginHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
     </div>
      </div>
    </>
  );
}

export default Login;
