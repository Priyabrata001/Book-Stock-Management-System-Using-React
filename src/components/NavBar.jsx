import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Style/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
  const navigate = useNavigate();
  const onlogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbarstyle">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Viewonly">
          Books Inventory System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link"  to="/Addbook">
                Add Book
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Viewbook">
                  Update Book
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/DeleteBook">
                  Delete Book
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Searchbook">
                   Search Book
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Viewonly">
                View Books
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Actions
                </Link>
                
                <ul className="dropdown-menu">
                <li>
                     <Link style={{ textDecoration: "none", color: "black" ,padding:18}} 
                      to="/profile">Profile</Link></li>
                  <li>
                    <a className="dropdown-item" onClick={onlogout}>
                      Log Out
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
      
      ></div>
    </>
  );
}
