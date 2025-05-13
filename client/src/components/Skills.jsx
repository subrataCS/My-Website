import React from 'react'
import '../CSS/Skills.css'
import Nav from './Nav';
const Skills = () => {
  return (
    <>
    {/* <Nav/> */}
      <h1 className="skills_header" id='skills'>Skill & Tools</h1>

      <div className="slills_section">
        <div className="one">
          <h3>Cybersecurity & Hacking</h3>
          <h4>Penetration Testing</h4>
          <h4>Ethical Hacking </h4>
          <h4>Web Security </h4>
        </div>
        <div className="one">
          <h3>Networking & Security </h3>
          <h4>Wi-Fi Hacking</h4>
          <h4>Packet Analysis </h4>
        </div>

        <div className="one">
          <h3>Hacking Tools </h3>
          <h4>Metasploit </h4>
          <h4>Bettercap </h4>
          <h4>Nmap </h4>
          <h4>Shodan </h4>
          <h4>Burp Suite </h4>
          <h4>Wireshark </h4>
        </div>

        <div className="one">
          <h3>Programming & Scripting </h3>
          <h4>Python</h4>
          <h4>Bash</h4>
          <h4>Java Script</h4>
        </div>

        <div className="one">
          <h3>Operating Systems </h3>
          <h4>Windwos (Active Driectory,Hyper-V)</h4>
          <h4>Linux (Mint , Kali)</h4>
        </div>

      </div>
    </>
  );
}

export default Skills