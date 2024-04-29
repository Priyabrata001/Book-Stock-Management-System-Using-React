import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Addbook from './Addbook';
import Deletebook from './Deletebook';

import Searchbook from './Searchbook';
import Viewbook from './Update';
import Viewonly from './Viewonly';
import AdminHome from './AdminHome';
import AdminLogin from './AdminLogin';
import App from '../App';

export default function HomeRout() {
  return (
    <div>      
        <Router>
        <Routes>
        <Route path="/" element={<AdminLogin></AdminLogin>}></Route>
            <Route path="Addbook" element={<Addbook></Addbook>}></Route>
            <Route path="Deletebook" element={<Deletebook></Deletebook>}></Route>
            
            <Route path="Searchbook" element={<Searchbook></Searchbook>}></Route>
            <Route path="Viewbook" element={<Viewbook></Viewbook>}></Route>
            <Route path="Viewonly" element={<Viewonly></Viewonly>}></Route>
            <Route path="AdminHome" element={<AdminHome></AdminHome>}></Route>
            <Route path="AdminLogin" element={<AdminLogin></AdminLogin>}></Route>

            <Route path="App" element={<App></App>}></Route>
           
        </Routes>
      </Router>
    </div>
  )
}
