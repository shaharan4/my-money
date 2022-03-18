import "../css/Navbar.css";

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    render(){
        return(
            <nav className="navbar_container">
                <ul className="navbar_ul">
                    <li className="navbar_item">
                    <Link to="/" className="nav_link">Home</Link>  
                    </li>
                    <li className="navbar_item">
                    <Link to="/portfolio" className="nav_link">My Portfolio</Link>   
                    </li>
                    <li className="navbar_item">
                    <Link to="/edit_user" className="nav_link">Update User</Link>   
                    </li>
                    <li className="navbar_item">
                    <Link to="/create_user" className="nav_link">Create User</Link>   
                    </li>
                </ul>
    
            </nav>

        );

    }


}