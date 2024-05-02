import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import AdminHome from './NavBar';

function Profile() {
    const[items,setItems]=useState([]);
    const navigate=useNavigate();
    const loadProfile=()=>
    {
        const token=sessionStorage["token"];
        if(!token)
        {
            navigate("/");
            return ;
        }
        axios.get(`https://localhost:7001/api/Admins` )
        .then((response)=>{
            const result = response.data;
            if (response.status === 200) {
                const data = result;
                setItems(data)
            } else {
                alert("error while loading your Profile");
            }
        })
        .catch((error)=>{
            console.log(`error:`,error)
        });
    };
    useEffect(()=>{
        loadProfile();
    },[]);
    
    return (
        <>
            <AdminHome/>
            <div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col" style={{ boxShadow: "10px 10px 5px lightblue", border: "1px solid blue", borderRadius: 10, marginTop: 100 }}>
                        <h2 className="title mb-3">Profile</h2>
                        {items.length > 0 && (
                            <>
                                <div className="mt-3"><strong>Name: </strong><span>{items[0].adminName}</span></div>
                                <div className="mt-3"><strong>Email: </strong><span>{items[0].email}</span></div>
                                <div className="mt-3"><strong>AdminId: </strong><span>{items[0].adminId}</span></div>
                                <Link style={{ marginTop: 40, marginBottom: 40}} className="btn btn-success" to={`edit-admin/${items[0].adminId}`}>Edit Profile</Link>
                            </>
                        )}
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </>
    )
}

export default Profile
