import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateAnswer }) {
  return (
    <section>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={onDeleteQuestion}
            onUpdateAnswer={onUpdateAnswer}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
