import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Home</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/portfolio" className="nav-link">My Portfolio</Link>   
                    </li>
                    <li className="navbar-item">
                    <Link to="/edit_user" className="nav-link">Update User</Link>   
                    </li>
                    <li className="navbar-item">
                    <Link to="/create_user" className="nav-link">Create User</Link>   
                    </li>
                </ul>
                </div>
            </nav>

        );

    }


}