import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <NavLink to="/users" className="nav-link" activeClassName="nav-link active">Users</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/things" className="nav-link" activeClassName="nav-link active">Things</NavLink>
            </li>
        </ul>
    );

}

export default Nav;