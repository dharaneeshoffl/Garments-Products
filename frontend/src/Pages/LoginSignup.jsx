import React, { useState } from 'react'
import './CSS/LoginSignup.css'



export default function LoginSignup() {


  let [state, setState] = useState("Login");
  let [formData, setFormData] = useState({
    username: "",
    password: "",
    email:"",
  })

  let changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log("Login function Executed", formData);
    let responseData;
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }

  }

  const signup = async () => {
    console.log("Sign up function executed", formData);
    let responseData;
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/")
    }

    else {
      alert(responseData.errors)
    }
  };






  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}!👇</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up " ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
              required
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>

        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                setState("Login");
              }}
            >
              Login Here!
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click Here!
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, I agree to the terms of use & privacy policy. </p>
        </div>
      </div>
    </div>
  );
}
