import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import CtfDetail from "./CtfDetail";

const Ctf = () => {
  const postsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(CtfDetail.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = CtfDetail.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Nav />
      <h1>CTF Writeups --</h1>

      <div className="ctf_card">
        {currentPosts.map((post) => (
          <div key={post.id} className="card_items">
            <h2 className="ctf-title">{post.title}</h2>
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

      {/* Pagination buttons */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Ctf;
