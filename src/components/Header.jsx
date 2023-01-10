import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="Header">
        <Link to="/" className="Header_Link">
            <h1>NC News</h1>
        </Link>
            <p>Bringing you news on the stories that matter</p>
      </header>
    );
}

export default Header;