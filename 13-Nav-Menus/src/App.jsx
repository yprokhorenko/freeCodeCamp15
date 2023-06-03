import "./App.scss";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Submenu } from "./components/Submenu";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </div>
  );
};

export default App;
