import { useEffect, useState } from "react";
import { BiChevronsRight } from "react-icons/bi";

const url = "https://course-api.com/react-tabs-project";

import "./App.scss";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

    const fetchJobs = async () => {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setLoading(false);
    };

    useEffect(() => {
      fetchJobs();
    }, []);

    if (loading) {
      return (
        <section>
          <h1> Loading...</h1>
        </section>
      );
    }

  const { company, dates, duties, title } = jobs[value]; //value 0 , means I'll get the 1st item
  return (
    <div className="App">
      <div className="title-section">
        <h1 className="title">Experience</h1>
      </div>
      <section className="section">
                  {/* buttons */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                className={`company-btn ${index === value && "active-btn"} `}
                key={item.id}
                onClick={() => {
                  setValue(index);
                }}
              >
                {item.company}
              </button>
            );
          })}
        </div>
                    {/* info */}
        <div className="job-info">
          <h3>{title}</h3>
          <span className="company-name">{company}</span>
          <p>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <BiChevronsRight className="job-icon"></BiChevronsRight>
                <p className="duty-text">{duty}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default App;
