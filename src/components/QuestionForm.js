import React, { useState } from "react";

function QuestionForm({ onAddQuestion }) {
  const [formState, setFormState] = useState({
    prompt: "",
    answers: ["", "", "", ""],
    correctIndex: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith("answer")) {
      const index = parseInt(name.replace("answer", ""), 10);
      const newAnswers = [...formState.answers];
      newAnswers[index] = value;
      setFormState({ ...formState, answers: newAnswers });
    } else if (name === "correctIndex") {
      setFormState({ ...formState, correctIndex: parseInt(value, 10) });
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddQuestion({
      id: Math.random(),
      ...formState,
    });
    // Clear form after submission
    setFormState({
      prompt: "",
      answers: ["", "", "", ""],
      correctIndex: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Prompt:
        <input
          type="text"
          name="prompt"
          value={formState.prompt}
          onChange={handleChange}
        />
      </label>
      {formState.answers.map((answer, index) => (
        <label key={index}>
          Answer {index + 1}:
          <input
            type="text"
            name={`answer${index}`}
            value={answer}
            onChange={handleChange}
          />
        </label>
      ))}
      <label>
        Correct Answer:
        <select
          name="correctIndex"
          value={formState.correctIndex}
          onChange={handleChange}
        >
          {formState.answers.map((answer, index) => (
            <option key={index} value={index}>
              {answer}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Question</button>
    </form>
  );
}

export default QuestionForm;
