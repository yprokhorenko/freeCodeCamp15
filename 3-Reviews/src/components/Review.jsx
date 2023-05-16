import React, { useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import people from "../data";

const Review = () => {
  const [index, setIndex] = useState(3);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {return 0;}
    if (number < 0) {return people.length - 1;}
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      return checkNumber(index - 1);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      return checkNumber(index + 1);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
      </div>
      <span className="name">{name}</span>
      <span className="tg-icon"><FaTelegramPlane /></span>
      <br />
      <span className="job">{job}</span>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}><AiFillLeftCircle /></button>
        <button className="next-btn" onClick={nextPerson}> <AiFillRightCircle /></button>
      </div>
      <button className="surprise-btn" onClick={randomPerson}>Surprise Me</button>
    </div>
  );
};

export default Review;
