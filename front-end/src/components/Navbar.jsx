import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/delete">Delete</Link>
    </nav>
  )
}

export default Navbar
