import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import CtfDetail from "./CtfDetail";

const Ctf = () => {
  return (
    <>
      <Nav />
      <h1>CTF Writeups</h1>
      <div className="ctf_card">
        {CtfDetail.map((post) => (
          <div key={post.id} className="card_items">
            <h2>{post.title}</h2>
            <Link to={`/ctf/${post.id}`}>
              <img src={post.image} alt={post.title} />
            </Link>
            <p>
              <strong>Date:</strong> {post.date}
            </p>
            <Link to={`/ctf/${post.id}`}>
              <button className="ctf_btn">See in Detail: {post.title}</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ctf;
