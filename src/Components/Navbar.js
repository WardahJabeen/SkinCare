import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <h1 className="title">Website Name</h1>
            <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;