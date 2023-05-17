import React from "react";
import s from "./List.module.css";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id} className={s.personItem}>
            <img src={image} alt="name" className={s.profileImg} />
            <div className={s.personInfo}>
              <h4 className={s.personName}>{name}</h4>
              <p className={s.personAge}>{age} years</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
