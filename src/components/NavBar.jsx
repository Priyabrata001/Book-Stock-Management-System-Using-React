import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Style/AdminHome.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
  const navigate = useNavigate();
  const onlogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/Addbook">
          Books Inventory System
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Addbook">
                <i class="bi bi-book">Add Book</i>  
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Viewbook">
                  Update Book
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/DeleteBook">
                  Delete Book
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Searchbook">
                   Search Book
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Viewonly">
                View Books
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Actions
                </Link>
                
                <ul class="dropdown-menu">
                <li>
                     <Link style={{ textDecoration: "none", color: "black" ,padding:18}} 
                      to="/profile">Profile</Link></li>
                  <li>
                    <a class="dropdown-item" onClick={onlogout}>
                      Log Out
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        style={{
          display: "flex",
          backgroundColor: "#e48b33",
          height: "auto",
          width: "250px",
          marginTop: "70px",
        }}
      ></div>
    </>
  );
}
