import { useState } from "react";

const Navbar = () => {
  return (
    <div>
    <div>
      <nav className="title-navbar">
        
        <h1> Your Attire </h1>
        <ul>
            <li><a href="#">Women</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Beauty</a></li>
          </ul>
      </nav>
      </div>
      <div>
      <nav className="search-navbar">
        <input type="text" placeholder="Search ..." />
        <button> Search </button>
     
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
