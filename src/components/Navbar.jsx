import { useState } from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="title-navbar">
        <h1> Your Attire </h1>
      </nav>
      <nav className="search-navbar">
        <input type="text" placeholder="Search ..." />
        <button> Search </button>
        <ul>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>Beauty</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
