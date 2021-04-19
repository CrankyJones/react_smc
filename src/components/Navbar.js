import React from "react";
import {Link} from "react-router-dom";
import Search from "./Search";

function Navbar() {
  return (
    <>
        <nav>
        <div className="search-bar">
          <Search />
        </div>
        <div id='headerLinks'>          
          <Link to="/home" className="Nav_link">Home</Link>
          <span> | </span>
          <Link to="/postlist" className="Nav_link">Posts</Link>
          <span> | </span>
          <Link to="/notifications" className="Nav_link">Notifications</Link>
          <span> | </span>
          <Link to="/messages" className="Nav_link">Messages</Link>          
        </div>
        </nav>
    </>
  );
}

export default Navbar;