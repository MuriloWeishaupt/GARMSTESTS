import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/delete">Delete</Link>
    </nav>
  )
}

export default Navbar
