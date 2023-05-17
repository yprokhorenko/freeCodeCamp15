import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const SingleQuestion = ({ info, title }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question-block">
      <div className="title-block" onClick={() => {setShowAnswer(!showAnswer)}}>
        <h4 className="question-title">{title}</h4>
        <button className="question-icon" >
        { showAnswer? <AiFillMinusCircle/> : <AiFillPlusCircle/>}
        </button>
      </div>
      
     { showAnswer && <p className="question-info">{info}</p> } 
     
    </div>
  );
};

export default SingleQuestion;
