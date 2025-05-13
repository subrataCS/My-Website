import React from 'react'
import '../CSS/About.css'

const About = () => {
  return (
    <>
      <h1 className="about_heading" id="about">
        My Passion for Cybersecurity
      </h1>
      <div className="about_landingpage">
        <p>
          Hey there! I'm a passionate cybersecurity enthusiast on a mission to
          master ethical hacking, reverse engineering, and network security. I
          started my journey after spending two years exploring full-stack
          development—until I realized my real excitement comes from breaking
          systems to understand them.
        </p>
        <p>
          Now, I’m building my skills from the ground up with hands-on practice,
          daily learning routines, and a home lab featuring vulnerable machines
          and real-world simulations. I’m currently focused on mastering Wi-Fi
          hacking, manual exploitation, Assembly, and eventually diving deep
          into reverse engineering. My goal? To become an elite hacker with
          skills as sharp as Elliot Alderson’s—crafting custom exploits,
          thinking like an attacker, and documenting every step of the way. I’m
          also building this website as a personal log of my growth and a way to
          give back to the hacking community.
        </p>
        <p>
          If you're someone who's into cybersecurity, hacking labs, CTFs, or
          just curious about the hacker mindset—welcome to my journey.
        </p>
      </div>
    </>
  );
}

export default About