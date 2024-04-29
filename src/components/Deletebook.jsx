import React, { useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Style/Delete.css';
import AdminHome from './AdminHome'

export default function Deletebook() {
 

  const [data, setData] = useState("")
  const navigate = useNavigate();
    const token = sessionStorage["token"];
        if (!token) {
          navigate("/");
          return;
        }




  const sendData = (a) => {
    axios.delete(`https://localhost:7001/api/Books/${a}`)

    alert("Book Information Deleted succesfully")
  }

  return (
    <> <AdminHome></AdminHome>
      <div id='table-box'>

        <form >
          <h1>Delete Book</h1>
          <label >Enter Book Name :</label>
          <input type="text" name='bookName' onChange={(e) => setData(e.target.value)} placeholder="Enter BookName for Delete Book" /><br />
          <label></label><button type="submit" onClick={() => sendData(data)}>Submit</button><button type="reset">Reset</button><br /><br />
        </form>
          </div>
    </>
  )
}
