//This line import reat libary from react which is a js libary for building user interface
import React from "react";
//This line import ReactDom Libary ,which is used to interact with dom and render react component
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

  <App />
 
    
  </React.StrictMode> //It activates the additional checks and warning during the development phase
);
