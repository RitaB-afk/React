import React, { useState } from "react";
interface QuestionProps {
  question: string;
  answer: string;
}

export const Question = (props: QuestionProps) => {
  const [answerIsVisible, setAnswerIsVisible] = useState<boolean>(false);
  const handleButtonClick = (event) => {
    setAnswerIsVisible(!answerIsVisible);
  };

  const buttonText = answerIsVisible ? "-" : "+";
  return (
    <section
      style={{
        backgroundColor: "white",
        margin: "10px 0px 0px 0px",
        borderStyle: "ridge",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          margin: "20px",
        }}
      >
        <h4>{props.question}</h4>
        <button onClick={handleButtonClick}>{buttonText} </button>
      </div>
      {answerIsVisible && (
        <p style={{ margin: "20px", fontWeight: "lighter" }}>{props.answer}</p>
      )}
    </section>
  );
};

export default Question;
