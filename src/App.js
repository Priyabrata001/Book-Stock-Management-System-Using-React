import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addbook from "./components/Addbook";
import Deletebook from "./components/Deletebook";

import Searchbook from "./components/Searchbook";
import Viewbook from "./components/Update";
import Viewonly from "./components/Viewonly";
import AdminLogin from "./components/AdminLogin";
import EditAdmin from "./components/EditAdmin";
import Profile from "./components/Profile";
import CompanyContact from "./components/Contactus";


function App() {
  return (
    <div className="App">
         <div>
         
      <Router> {/*Top container providing routing functionality for the application  */}
        <Routes> {/* used to group and manage different route */}
          <Route path="/" element={<AdminLogin/>}/>{/*used to specify ,specific route in the application.*/ }
          <Route path="/Addbook" element={<Addbook/>}/>
          <Route path="/Deletebook" element={<Deletebook/>}/>
          <Route path="/Searchbook" element={<Searchbook/>}/>
          <Route path="/Viewbook" element={<Viewbook/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="profile/edit-admin/:id" element={<EditAdmin/>}/>
          <Route path="/Viewonly" element={<Viewonly></Viewonly>}/>
          <Route path='/contact-us' element={<CompanyContact/>}/>
        </Routes>
      </Router>
    </div>

    </div>
  );
}

export default App;

