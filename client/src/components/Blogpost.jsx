import React, { useState } from "react";
import blogData from "./Blog";
import "../CSS/Blog.css";
import Nav from "./Nav";

const Blogpost = () => {
  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Nav />
      <h1>Blog Posts</h1>
      <div className="blog-container">
        {currentPosts.map((post) => (
          <div key={post.id} className="blog-card">
            {post.image && <img src={post.image} alt={post.title} />}
            <div className="blog-content">
              <h2>{post.title}</h2>
              {post.summary && <p>{post.summary}</p>}
              {post.link && <a href={post.link}>Read More</a>}
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
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

export default Blogpost;
