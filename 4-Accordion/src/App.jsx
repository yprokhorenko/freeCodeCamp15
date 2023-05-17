import "./App.scss";
import data from "../data";
import SingleQuestion from "./components/SingleQuestion";
import React, { useState } from "react";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="app-wrapper">
      <h2 className="">Questions</h2>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
    </div>
  );
};

export default App;
