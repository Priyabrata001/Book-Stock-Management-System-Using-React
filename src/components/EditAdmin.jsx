import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { validateEmail } from "../EmailValidate";
import AdminHome from './NavBar';

const EditAdmin = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[role,setRole]=useState("admin");

  const onSave = () => {
    const token = sessionStorage["token"];
    if(name.length===0){
      alert("enter the name");
    }
    else if (email.length === 0) {
      if (password.length === 0) {
        alert("please enter email & password Properly");
      } else {
        alert("please enter email");
      }
    } else if (!validateEmail(email)){
      alert("Enter a proper mail.")
    }
    else if (password.length === 0) {
      alert("please enter password");
    } else {
    const data = {
      adminId: id,
      adminName: name,
      email: email,
      role: role,
      password: password,
    };
  
    if (!token) {
      navigate("/");
      return;
    }
    axios
      .put(`https://localhost:7001/api/Admins/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      })
      .then((response) => {
        if (response.status === 200) {
          alert("successfully update user");
         
          navigate("/profile");
        } else {
          alert("error while update user");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Password must be 8 character long and it should contain a capital letter and small letter and number and at least one special character & Provide Valid Email " + error.message);
      });
    }
  };
  
  const loadProfile = () => {
    const token = sessionStorage["token"];

    axios
      .get(`https://localhost:7001/api/Admins/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const result = response.data;
        if (response.status === 200) {
          setName(result.adminName);
          setEmail(result.email);
          setPassword(result.password);
        } else {
          console.log("error");
        }
      });
  };
  useEffect(() => {
    loadProfile();
  }, [id]);

  return (
    <>
      <AdminHome />
      <div>
        <div className="row">
          <div className="col"></div>
          <div
            className="col"
            style={{
              boxShadow: "10px 10px 5px lightblue",
              border: "1px solid blue",
              borderRadius: 10,
              marginTop: 100,
            }}
          >
            <h2 className="title">Edit Profile</h2>

            <div className="form-group">
              <label htmlFor=""> Name :</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Password :</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email :</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="form-control"
              />
            </div>

            <div
              className="form-group"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              <button
               
                onClick={() => onSave(id)}
                className="btn btn-success"
              >
                Save
              </button>
              <br/>
              <Link
               
                to={"/profile"}
                className="btn btn-danger"
              >
                Cancel
              </Link>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};
export default EditAdmin;
