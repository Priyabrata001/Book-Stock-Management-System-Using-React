import React, { useEffect } from "react";
import { useState } from "react";
import AdminHome from "./NavBar";
import "./Style/Update.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Viewbook() {
  const [BookName, setBookName] = useState("");

  const [AutherName, setAutherName] = useState("");
  const [Price, setPrice] = useState("");
  const [Quntity, setQuntity] = useState("");

  const [ISBN, setISBN] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const navigate = useNavigate();
  const token = sessionStorage["token"];
  if (!token) {
    navigate("/");
    return;
  }

  function getBooks() {
    fetch(`https://localhost:7001/api/Books`).then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }

  function selectBook(isbnId) {
    let item = data[isbnId];
    setBookName(item.bookName);

    setAutherName(item.autherName);
    setPrice(item.price);
    setQuntity(item.quntity);
    setISBN(item.isbn);
  }

  function updateBook() {
    const item = { BookName, AutherName, Price, Quntity, ISBN };
    console.log(item);
  
    axios.put(`https://localhost:7001/api/Books/${ISBN}`, item)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          alert("Data updated successfully!");

          getBooks();
          setBookName("");

          setAutherName("");
          setPrice("");
         setQuntity("");
          setISBN("");
        }
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  }
  
  return (
    <>
      <AdminHome></AdminHome>
      <div id="Update-table">
        <div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1>Books Update DashBoard </h1>
            </div>

            <table className="table table-hover border">
              <thead>
                <tr>
                  <th scope="col">ISBN</th>

                  <th scope="col">Book Name</th>
                  <th scope="col">Author Name</th>
                  <th scope="col">Price </th>
                  <th scope="col">Quantity</th>

                  <th scope="col" colSpan={2}>
                    Operations
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr key={i}>
                    <td>{item.isbn}</td>

                    <td>{item.bookName}</td>
                    <td>{item.autherName}</td>
                    <td>{item.price}</td>
                    <td>{item.quntity}</td>

                    <td>
                      <button
                        className="btn btn-secondary"
                        onClick={() => selectBook(i)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <input
              type="text"
              value={BookName}
              onChange={(e) => {
                setBookName(e.target.value);
              }}
              placeholder="Book Name"
            />
            <br />
            <br />
            <input
              type="text"
              value={AutherName}
              onChange={(e) => {
                setAutherName(e.target.value);
              }}
              placeholder="Auther Name"
            />
            <br />
            <br />
            <input
              type="text"
              value={Price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Price  "
            />
            <br />
            <br />
            <input
              type="text"
              value={Quntity}
              onChange={(e) => {
                setQuntity(e.target.value);
              }}
              placeholder="Quantity"
            />
            <br />
            <br />
          
            <button className="btn btn-primary" onClick={updateBook}>
              Update Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
