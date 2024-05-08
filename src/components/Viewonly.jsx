import React,{ useEffect } from 'react'
import { useState } from 'react'
import AdminHome from './NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Style/View.css';

export default function Viewbook() {
  const[data,setData]=useState("");
  useEffect(() => {
    
    axios.get("https://localhost:7001/api/Books")
    .then(response=>setData(response.data))
    .catch(err=>console.error(err))

  }, []);

  const navigate = useNavigate();
    const token = sessionStorage["token"];
        if (!token) {
          navigate("/");
          return;
        }

  return (
    <>
    <AdminHome></AdminHome>
    <div id='View-table'>
        <h1>Viewbook</h1>
        <table border={3} align="center">
                <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                         
                          </tr>
                </thead>
                <tbody>
                        {data && data.map((d)=>
                        (
                          <tr key={d.ISBN}>

                            
                            <td>{d.isbn}</td>
                            <td>{d.bookName}</td>
                            <td>{d.autherName}</td>
                            <td>{d.price}</td>
                            <td>{d.quntity}</td>
                           
                             
                          </tr>
                        )
                        )}
                </tbody>
            </table>   
    </div>
    </>
  )
}
