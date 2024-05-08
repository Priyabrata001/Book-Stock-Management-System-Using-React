import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminHome from './NavBar';
import './Style/Add.css';

export default function Addbook() {
 
  const [BookName, setBookName] = useState("");
  const [AutherName, setAutherName] = useState("");
  const [Price, setPrice] = useState("");
  const [Quntity, setQuntity] = useState("");
  const navigate = useNavigate();
  const token = sessionStorage["token"];
      if (!token) {
        navigate("/");
        return;
      }


  const handleSave = (e) => {
    e.preventDefault();

    let error = '';
 
    if (BookName === '') error += 'BookName, ';
    if (AutherName === '') error += 'AutherName, ';
    if (Price === '') error += 'Price, ';
    if (Quntity === '') error += 'Quntity, ';

    if (error.length > 0) {
      error = error.substring(0, error.length - 2) + ' can not be blank';
      alert(error);
      return;
    }
   
    const data = {
   
      BookName: BookName,
      AutherName: AutherName,
      Price: Price,
      Quntity: Quntity,
    };

    axios
      .post('https://localhost:7001/api/Books', data)
      .then((response) => {
        const result = response.data;
        console.log(data);
        if (result) {
          alert('register successfully');
          //navigate('/Viewonly');
          setBookName("");
          setAutherName("");
          setPrice("");
          setQuntity("");
        } else {
          alert('error while uploading');
        }
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  };
 

  return (
    <>
   
   <AdminHome/>
      <div id='Add-Table' className="container py-3">
        <h1 className="text-center">Add Book</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <div>

              <div className="form my-3">
                <label htmlFor="BookName">BookName</label>
                <input
                  type="text"
                  className="form-control"
                  id="BookName"
                  onChange={(e) => setBookName(e.target.value)}
                  value={BookName}
                  placeholder="Enter Your Book Name"
                />
              </div>

              <div className="form my-3">
                <label htmlFor="AuthorName">AuthorName</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setAutherName(e.target.value)}
                  id="AuthorNmae"
                  value={AutherName}
                  placeholder="Enter the author name"
                />
              </div>
              <div className="form  my-3">
                <label htmlFor="Price">Price</label>
                <input
                  type="tel"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                  value={Price}
                  id="Price"
                  placeholder="price"
                />
              </div>
              <div className="form  my-3">
                <label htmlFor="Quantity">Quantity</label>
                <input
                  type="tel"
                  className="form-control"
                  onChange={(e) => setQuntity(e.target.value)}
                  id="Quantity"
                  value={Quntity}
                  placeholder="Quantity"
                />
              </div>

              <div className="text-center">
                <button
                  class="my-2 mx-auto btn btn-dark"
                  type="submit"
                  onClick={(e) => handleSave(e)}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}