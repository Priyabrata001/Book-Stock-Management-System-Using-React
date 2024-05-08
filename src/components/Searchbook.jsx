import React from 'react'
import { useState} from 'react'
import AdminHome from './NavBar';
import { useNavigate } from 'react-router-dom';

import './Style/search.css'

export default function Viewbook() {

  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState([]);

  const navigate = useNavigate();
    const token = sessionStorage["token"];
        if (!token) {
          navigate("/");
          return;
        }


  const searchItem = () => {
    fetch(`https://localhost:7001/api/Books/bookName?FilterQuery=${searchTerm}`)
      .then(response => response.json())
      .then((result) => {
        console.log(result)
        if (result.length === 0) {
          alert("Provide Valid BookName or AuthorName");
        } else {
          setData(result);
        }
      })
     
  }
 

  return (
    <>  <AdminHome></AdminHome>

      <div id='table-box'>

        <h1>Searchbook</h1>
        <div className='d-flex align-items-center justify-content-center'>

          <div class="d-flex p-20 " role="search">
            <input class="form-control me-2" onChange={(e) => setSearchTerm(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success w-12"  type="submit" onClick={searchItem}>Search</button>
          </div>
        </div> <br />
        <table border={3} className='table table-striped' align="center">
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


            {data.map((d) => (
              <tr key={d.isbn}>
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
