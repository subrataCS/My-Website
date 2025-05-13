import React from "react";
import { useParams } from "react-router-dom";
import CtfDetail from "./CtfDetail";

const CtfSingle = () => {
  const { id } = useParams();
  const ctf = CtfDetail.find((item) => item.id === parseInt(id));

  if (!ctf) return <div>CTF not found</div>;

  return (
    <div>
      <h1>{ctf.title}</h1>
      <img src={ctf.image} alt={ctf.title} />
      <p>
        <strong>Date:</strong> {ctf.date}
      </p>
      <div>{ctf.content}</div> {/* THIS IS THE FULL WALKTHROUGH */}
    </div>
  );
};

export default CtfSingle;
