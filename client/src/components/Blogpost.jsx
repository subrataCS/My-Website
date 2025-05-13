// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import blogPosts from "./Blog"; // Importing blog data
// import Nav from "./Nav";

// const BlogDetail = () => {
//   const { id } = useParams(); // Get the blog ID from URL
//   const postIndex = blogPosts.findIndex((p) => p.id === parseInt(id)); // Find the index of the post

//   if (postIndex === -1) {
//     return <h2>Blog not found</h2>;
//   }

//   const post = blogPosts[postIndex]; // Get the current post
//   const prevPost = blogPosts[postIndex - 1]; // Get the previous post (if exists)
//   const nextPost = blogPosts[postIndex + 1]; // Get the next post (if exists)

//   return (
//     <>
//       <Nav />
//       <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
//         <h1>{post.title}</h1>
//         <img src={post.image} alt={post.title} width="70%" />
//         <p>{post.content}</p>
//         <small>
//           <strong>Published on:</strong> {post.date}
//         </small>

//         {/* Pagination Buttons */}
//         <div
//           style={{
//             marginTop: "20px",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           {prevPost ? (
//             <Link to={`/blog/${prevPost.id}`}>
//               <button>⬅ Previous: {prevPost.title}</button>
//             </Link>
//           ) : (
//             <button disabled>⬅ No Previous Post</button>
//           )}

//           {nextPost ? (
//             <Link to={`/blog/${nextPost.id}`}>
//               <button>Next: {nextPost.title} ➡</button>
//             </Link>
//           ) : (
//             <button disabled>No Next Post ➡</button>
//           )}
//         </div>
//         <Link to="/blog">Back</Link>
//       </div>
//     </>
//   );
// };

// export default BlogDetail;
