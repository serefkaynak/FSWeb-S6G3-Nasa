import React from 'react';
import './Header.css';

const imgUrl = 'https://www.nasa.gov/wp-content/uploads/2021/05/nasa-logo-web-rgb.png?w=320'

function LogoComponent() {
    return (
        <div className="logo">
            <img src={imgUrl}/>
        </div>
    );
}

function NavComponent() {
    return (
        <nav className="navigation">
            <a href="#">Topics</a>
            <a href="#">Mission</a>
            <a href="#">Galleries</a>
            <a href="#">NASA TV</a>
        </nav>
    );
}

function SearchComponent() {
    return (
        <div className="search">
            <input type="text" placeholder="Search" />
            <button>🔍</button>
        </div>
    );
}

function Header() {
    return (
        <div className="header">
            <LogoComponent />
            <NavComponent />
            <SearchComponent />
        </div>
    );
}

export default Header;
