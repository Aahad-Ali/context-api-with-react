import { useState } from "react";
import axios from "axios";
import "./signup.css";

const baseUrl = "http://localhost:5001/api/v1";

// let baseUrl = "";
// if (window.location.href.split(":")[0] === "http") {
//   baseUrl = `http://localhost:5001/api/v1`;
// } else {
//   baseUrl = `https://context-api-with-jwt.cyclic.app/api/v1`;
// }

function Signup() {
  const [result, setResult] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post(`${baseUrl}/signup`, {
        firstName: name,
        lastName: name,
        email: email,
        password: password,
      });

      console.log("signup successful");
      setResult("signup successful");
    } catch (e) {
      console.log("e: ", e);
    }

    // e.reset();
  };

  return (
    <div className="container">
      <h4>This is Signup page</h4>
      <form onSubmit={signupHandler}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="email"
            aria-label="email"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="password"
            aria-label="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {/* <input
            type="password"
            className="form-control"
            placeholder="confirm password"
            aria-label="password"
          /> */}
        </div>
        <div>
          <button type="submit" className="btn btn-primary">Signup</button>
        </div>
      </form>

      {/* <form onSubmit={signupHandler}> */}
      {/* Name:
        <input
          type="text"
          name="name"
          placeholder="Enter /your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        Email:
        <input
          type="email"
          name="username"
          autoComplete="/username"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        Password:
        <input
          type="password"
          name="new-password"
          autoCom/plete="new-password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        Password:
        <input
          type="password"
          name="new-password"
          autoCom/plete="new-password"
          placeholder="confirm password"
        />
        <br />
        <button type="submit">Signup</button> */}

      {/* <div id="main1">
        <span id="validation1"></span>
        <input
          className="signupForm"
          type="userName"
          name/="userName"
          id="userName"
          placeholder="username"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <span id="validation2"></span>
        <input
          className="signupForm"
          type="email"
          name="e/mail"
          id="email"
          autoComplete="username"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <span id="validation3"></span>
        <input
          className="signupForm"
          type="password"
          name/="password"
          id="password1"
          placeholder="Password"
          autoComplete="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <input
          className="signupForm"
          type="password"
          name/="password"
          id="ConfirmPassword"
          placeholder="Confirm Password"
          autoComplete="password"

        />


        <button type="submit" id="sub">
          
          SignUp
        </button>
      </div>
      </form>
      <p>{result}</p> */}
    </div>
  );
}

export default Signup;
