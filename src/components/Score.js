import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Score() {
  let navigate = useNavigate();
  let { nScore } = useParams();
  return (
    <div className="score-container d-flex flex-column justify-content-center align-items-center">
      <h2 className="congrats-title">
        {nScore === 0
          ? "You could do better"
          : `Congrats. Your score is ${nScore}`}{" "}
      </h2>
      <p className="congrats-p">
        Never satisfied. Keep refreshing your memorization
      </p>
      <button className="congrats-button" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
}
