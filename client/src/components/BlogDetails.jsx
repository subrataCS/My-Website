// import React from "react";
// import { Link } from "react-router-dom";
// import Nav from "./Nav";
// import blogPosts from "./Blog";
// import "../CSS/TutorialList.css";

// const BlogList = () => {
//   return (
//     <>
//       <Nav />
//       <h1>Welcome to the blog section...</h1>
//       <div className="tutorial_card">
//         {blogPosts.map((post) => (
//           <div
//             key={post.id}
//             className="card_items"
//             style={{ marginBottom: "20px" }}
//           >
//             <h2>{post.title}</h2>
//             <Link to={`/blog/${post.id}`}>
//               <img src={post.image} alt={post.title} width="300" />
//             </Link>
//             <p>
//               <strong>Date:</strong> {post.date}
//             </p>
//             <Link to={`/blog/${post.id}`}>
//               <button className="tutorial_btn">See in Detail : {post.title}</button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default BlogList;
