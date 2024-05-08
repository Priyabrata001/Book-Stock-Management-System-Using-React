import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Style/Delete.css';
import AdminHome from './NavBar';
import { createURL } from "./createURL";

export default function Deletebook() {
  
  const [data, setData] = useState("")
  const navigate = useNavigate();
    const token = sessionStorage["token"];
        if (!token) {
          navigate("/");
          return;
        }
  const sendData = (e,data) => {
    e.preventDefault();

    const url = createURL(
      `api/Books/api/Book/${data}`
    );
    axios.delete(url)
    .then(res => {
      if (res.status === 200) {
        alert("Book Information Deleted successfully");
      } else {
        alert("Wrong Information or Error deleting book. Please try again.");
        
      }
    })
    .catch(error => {
      console.error('Error deleting book:', error);
      alert("An error occurred while deleting the book. Please try again later.");
      
    });
  
  
  }

  return (
    <> 
    <AdminHome></AdminHome>
      <div id='table-box'>

        <form >
          <h1>Delete Book</h1>
          <label >Enter Book ISBN Number :</label>
          <input type="text" name='bookName' onChange={(e) => setData(e.target.value)} placeholder="Enter The Book ISBN Number" /><br />
          <label></label><button type="submit" onClick={(e) => sendData(e,data)}>Submit</button>
          <button type="reset">Reset</button><br /><br />
        </form>
          </div>
    </>
  )
}
