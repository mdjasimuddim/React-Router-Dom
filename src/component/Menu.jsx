import React from 'react'
// import styles from '../styles/css/Navbar.css'
import {NavLink} from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink className={({isActive}) => isActive ? "active-link":"pending-link"}  to = "/">Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active-link":"pending-link"}  to = "/profile/jasim/jasimuddim">Profile</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active-link":"pending-link"}  to = "/product/101/jasim">Product</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active-link":"pending-link"}  to = "*">Not Found</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Menu