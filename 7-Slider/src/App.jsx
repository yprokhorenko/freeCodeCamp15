import { useState, useEffect } from "react";
import "./App.scss";
import {TbSquareRoundedChevronLeftFilled, TbSquareRoundedChevronRightFilled} from "react-icons/Tb";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {setIndex(lastIndex);}
    if (index > lastIndex) {setIndex(0);}
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {setIndex(index + 1);}, 3000);
         return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="App">
      <section>
        <h1 className="section-title">Reviews</h1>
        <div className="section-main">
          {people.map((person, personIndex) => {
            const { id, name, job, image, quote } = person;
            let articlePosition = "nextSlide";
            if (personIndex === index) {
              articlePosition = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              articlePosition = "lastSlide";
            }

            return (
              <article key={id} className={articlePosition}>
                <img className="person-image" src={image} alt="name" />
                <div className="person-name">{name}</div>
                <div className="person-job">{job}</div>
                <p className="person-quote">{quote}</p>
              </article>
            );
          })}
          <button className="prev-btn" onClick={() => {setIndex(index - 1);}}>
            <TbSquareRoundedChevronLeftFilled />
          </button>
          <button onClick={() => {setIndex(index + 1);}} className="next-btn">
            <TbSquareRoundedChevronRightFilled />
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
