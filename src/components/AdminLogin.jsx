import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "../components/Style/AdminLogin.css";
import { validateEmail } from "../EmailValidate";

import { createURL } from "./createURL";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onLogin = () => {
    if (email.length === 0) {
      if (password.length === 0) {
        alert("please enter email & password Properly");
      } else {
        alert("please enter email");
      }
    } else if (!validateEmail(email)){
      alert("Enter a proper mail.")
    }
    else if (password.length === 0) {
      alert("please enter password");
    } else {
      const url = createURL(
        `api/Admins/login?email=${email}&password=${password}`
      );

      axios
        .post(url)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            sessionStorage["token"] = response.data;
            alert("Login Successfully");
            navigate("/Addbook");
          } else {
            alert("Please Use Correct Email and Password");
          }
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    }
  };
  const handleForgotPassword = () => {
    navigate("/contact-us");
  };

  return (
    <>
      <div className="loginpage">
        <div className="row justify-content-center">
          <div
            className="col-6 "
            style={{
              boxShadow: "5px 10px grey",
              backgroundColor: "white",
             
              marginTop: 100,
              marginRight: 100,
              borderRadius: 10,
            }}
            // style="background-color: white;/* box-shadow: lightblue 10px 10px 5px; *//* border: 1px solid blue; */margin-top: 100px;margin-right: 100px;border-radius: 10px;"
          >
            <h2 className="title">Login</h2>
            <div
              className="form-group"
              style={{ backgroundColor: "#f5f5f5", padding: "10px" }}
            >
              <label htmlFor="email">Email:</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div
              className="form-group"
              style={{ backgroundColor: "#f5f5f5", padding: "10px" }}
            >
              <label htmlFor="password">Password:</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group mb-5">
              <button onClick={onLogin} className="btn btn-primary">
                Login
              </button>
            </div>

            <div className="form-group mb-5">
              <i onClick={handleForgotPassword}>Forgot Password?</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
