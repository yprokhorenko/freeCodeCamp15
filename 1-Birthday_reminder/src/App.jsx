import "./App.css";
import data from "../data";
import List from "./components/List";
import React, { useState } from "react";

const App = (props) => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <section className="birthdayContainer">
        <h3> {people.length} birthdays today</h3>
        <div className="usersList">
          <List people={people} />
        </div>
        {people.length ? (<button className="birthdayBtn" onClick={() => {setPeople([]);}}>Clear all</button>) : null}
      </section>
    </>
  );
};

export default App;
