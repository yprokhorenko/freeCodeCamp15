import { useState } from "react";
import "./App.scss";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import items from "../data";

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  return (
    <div className="App">
      <div className="menu-section">
        <div className="menu-title">
          <h1>Our Menu</h1>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </div>
    </div>
  );
};

export default App;
