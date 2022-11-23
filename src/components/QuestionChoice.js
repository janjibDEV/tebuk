import { React } from "react";
import { juzs } from "../data";
import { useNavigate } from "react-router-dom";

const QuestionChoice = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div>
        <h2 className="question-text text-center m-5 p-5">Pick a Juz</h2>
      </div>
      <div className="juz-div d-flex  justify-content-center space-around flex-wrap">
        {juzs.map((item, index) => {
          return (
            <button
              className="jul"
              key={index}
              onClick={() => navigate(`/questionanswer/${item}`)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionChoice;
