import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "../components/Style/AdminLogin.css";

import { createURL } from "./createURL";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onLogin = () => {
    if (email.length === 0) {
      toast.warn("please enter email");
      alert("please enter email");
    } else if (password.length === 0) {
      toast.warn("please enter password");
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
            toast.error("Invalid email or password");
          }
        })
        .catch((error) => {
          console.error("An error occurred:", error);
          toast.error("An error occurred while logging in");
        });
    }
  };

  return (
    <>
      <div className="loginpage">
        <div className="row">
          <div className="col"></div>
          <div
            className="col"
            style={{
              boxShadow: "10px 10px 5px lightblue",
              border: "1px solid blue",
              marginTop: 150,
              borderRadius: 10,
            }}
          >
            <h2 className="title">Login</h2>
            <div className="form-group">
              <label htmlFor="">Email:</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password:</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
              />
            </div>
            <div className="form-group mb-5">
              <button onClick={onLogin} className="btn btn-success">
                Login
              </button>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
