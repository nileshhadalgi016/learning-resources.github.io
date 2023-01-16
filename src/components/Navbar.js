import React from 'react'
import logo from './images/logo.jpg'

export default function Navbar(){
    return(
        <div className='navbar'>
            <img className='logo' src={logo} alt="" />
            <h1 className='nav-h1'>Courses</h1>
        </div>
    )
}