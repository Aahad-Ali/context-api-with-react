import { useState } from "react";
import axios from "axios";
import "./signup.css";

const baseUrl = "http://localhost:5001";

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
    <>
      <h4>This is Signup page</h4>
      <form onSubmit={signupHandler}>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text" id="basic-addon2">
            @example.com
          </span>
        </div>

        <div class="mb-3">
          <label for="basic-url" class="form-label">
            Your vanity URL
          </label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3">
              https://example.com/users/
            </span>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>
          <div class="form-text">
            Example help text goes outside the input group.
          </div>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">$</span>
          <input
            type="text"
            class="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <span class="input-group-text">.00</span>
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
          />
          <span class="input-group-text">@</span>
          <input
            type="text"
            class="form-control"
            placeholder="Server"
            aria-label="Server"
          />
        </div>

        <div class="input-group">
          <span class="input-group-text">With textarea</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
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
    </>
  );
}

export default Signup;
