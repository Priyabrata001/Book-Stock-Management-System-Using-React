import React from 'react'
import { useNavigate } from 'react-router-dom';




export default function AdminHome() {
  const navigate=useNavigate()
  const onlogout=()=>
  {
    sessionStorage.removeItem("token");
    navigate("/");
  }
 
  return (
    <>

      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Books Inventory System</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/Addbook">Add Book</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Viewbook">Update Book</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/DeleteBook">Delete Book</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Viewonly">View Books</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Actions
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/Searchbook">Search Book</a></li>
                  <li><a class="dropdown-item" onClick={onlogout} >Log Out</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  
                </ul>
              </li>
          
            </ul>
            
          </div>
        </div>
      </nav>
      <div style={{ display: "flex", backgroundColor: "#e48b33", height: "auto", width: "250px", marginTop: "70px" }}>
        
      </div>
    </>
  )
}

