import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
            <img src="https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png" alt="" width="30" height="30" class="d-inline-block align-text-top"></img>
                <Link class="navbar-brand" href="#">Instagrown.</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-link" to="/">Home</Link>
                    <Link class="nav-link" to="/about">About</Link>
                    <Link class="nav-link" to="/contact">Contact</Link>
                </div>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                 <button className="btn btn-outline-light" type="submit">Search</button>
                 </form>
                </div>
            </div>
        </nav> 
        )
    }
}