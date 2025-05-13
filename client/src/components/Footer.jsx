import React from 'react'
import '../CSS/Footer.css'
const Footer = () => {



  return (
    <>
      <div className="footer">
        <a href="/Ctf">
          <div className="footer_navigation">
            <h1>01</h1>
            <h1>Blog</h1>
          </div>
        </a>

        <a href="/Ctf">
          {" "}
          <div className="footer_navigation">
            <h1>02</h1>
            <h1>CTF's</h1>
          </div>
        </a>
        <a href="/contact">
          <div className="footer_navigation">
            <h1>03</h1>
            <h1>Contact</h1>
          </div>
        </a>
      </div>
    </>
  );
}

export default Footer