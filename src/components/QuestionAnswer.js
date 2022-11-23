import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function QuestionAnswer() {
  const [text, setText] = useState("");
  const [answer, setAnswer] = useState("");
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const { juz } = useParams();
  let navigate = useNavigate();
  let result;

  const start = async (item) => {
    let url = `https://api.quran.com/api/v4/quran/verses/uthmani?juz_number=${item}`;
    let nQuestion;
    await axios.get(url).then((res) => {
      result = res.data.verses;
      nQuestion = Math.floor(Math.random() * result.length);
      setText(result[nQuestion]["text_uthmani"]);
    });
    setAnswer(result[nQuestion + 1]["text_uthmani"]);
    setRevealAnswer(false);
    setLoading(false);
  };

  const reset = () => {
    if (revealAnswer) {
      setRevealAnswer(false);
      start(juz);
    } else {
      setRevealAnswer(true);
    }
  };

  const answered = (isTrue) => {
    if (isTrue) {
      setScore((score) => score + 1);
    }
    reset();
  };

  return (
    <div className="d-flex flex-column">
      <div className="">
        <p className="d-flex float-end">score: {score}</p>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <button
            className="m-auto d-block answer-button"
            onClick={() => start(juz)}
          >
            Ready !
          </button>
        </div>
      ) : (
        <div>
          <h2 className="question-text text-center m-5 p-5">{text}</h2>
          {revealAnswer && (
            <h2 className="answer-text text-center m-5 p-5">{answer}</h2>
          )}
          <div className="d-flex space-between justify-content-center">
            {!revealAnswer ? (
              <button className="answer-button " onClick={reset}>
                Reveal answer
              </button>
            ) : (
              <div className="d-flex space-between">
                <button
                  className="answer-button "
                  onClick={() => answered(true)}
                >
                  I got it right!
                </button>
                <button
                  className="answer-button "
                  onClick={() => answered(false)}
                >
                  I got it wrong!
                </button>
              </div>
            )}
            <button
              className="answer-button "
              onClick={() => navigate(`/score/${score}`)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
