import React from 'react';
import {NavLink} from 'react-router-dom'
import './header.css'


export default function Header() {
  return (
    
    
   <>
       <h1>HRnet</h1>
    <nav >
        <NavLink to="/" > Create Employee</NavLink>
        <NavLink to="/employee-list">View Employees</NavLink>
    
    </nav>
    </> 
  )

}
