import { useState, useEffect } from "react";
import "./App.css";
const url = "https://course-api.com/react-tours-project";

import Tours from "./components/Tours/Tours";
import Loading from "./components/common/Loading/Loading";

const App = (props) => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Tours tours={tours} />
    </div>
  );
};

export default App;
