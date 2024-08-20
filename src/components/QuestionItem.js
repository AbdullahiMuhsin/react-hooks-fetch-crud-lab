import React from "react";

const QuestionItem = ({ question, onDeleteQuestion, onUpdateAnswer }) => {
  const { id, prompt, answers, correctIndex } = question;

  const handleAnswerChange = (event) => {
    onUpdateAnswer(id, parseInt(event.target.value, 10));
  };

  return (
    <li>
      <h4>{prompt}</h4>
      <label>
        Correct Answer:
        <select value={correctIndex} onChange={handleAnswerChange}>
          {answers.map((answer, index) => (
            <option key={index} value={index}>
              {answer}
            </option>
          ))}
        </select>
      </label>
      <button onClick={() => onDeleteQuestion(id)}>Delete Question</button>
    </li>
  );
};


export default QuestionItem;
