import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import Logo from '../../logo-no-background.png';

function MainContent() {
    return (
        <main>            
            <div className="logo">
                <img src={Logo} alt="Logo" className="logo" />
            </div>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <form class="search" action="action_page.php">
                <input type="text" placeholder="Search Movies..." name="search"></input>
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>

            <div className="button-container">
                <Link to="/form" className="button"><span>Get Recommended a Movie</span></Link>
                <Link to="/random" className="button"><span>Find a Random Movie</span></Link>
                <Link to="/popular" className="button"><span>Most Popular Movies</span></Link>
            </div>
            
        </main>
    );
}

export default MainContent;