import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <ul class="nav nav-pills">
            <li class="active">
                <NavLink to="/users" activeClassName={"active"}>Users</NavLink>
            </li>
            <li>
                <NavLink to="/things" activeClassName={"active"}>Things</NavLink>
            </li>
        </ul>
    );

}

export default Nav;