import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  return (
    <div className="main-container d-flex flex-column align-items-center justify-content-center">
      <img alt="a book" src="open-book.png" className="m-5" />
      <h1 className="text-center title">tebuk</h1>
      <p className="text-center">
        A companion developed to help you memorize Al-Quran
      </p>
      <button
        onClick={() => navigate("/questions")}
        className="answer-button d-block"
      >
        Lets get started
      </button>
    </div>
  );
}
