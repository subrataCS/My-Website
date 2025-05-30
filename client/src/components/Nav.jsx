import React from "react";
import '../CSS/Nav.css'




const Nav = () => {
  return (
    <nav className="main_nav">
      <div className="logo">
        <a href="/">
          {" "}
          <h1>Whoami?</h1>
        </a>
      </div>

      <div className="options">
        <li><a href="/">Home</a></li>
        <li><a href="/Ctf">CTF</a></li>
        <li><a href="/social">Social</a></li>
        <li><a href="/blog">Blog</a></li>

      </div>
    </nav>
  );
};

export default Nav;
