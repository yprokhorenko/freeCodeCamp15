import { useState } from "react";
import "./App.scss";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import items from "../data";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter( //https://youtu.be/a_7Z7C_JCyo?t=5837
      (item) => item.category === category);
      setMenuItems(newItems);
  };

  return (
    <div className="App">
      <div className="menu-section">
        <div className="menu-title">
          <h1>Our Menu</h1>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </div>
    </div>
  );
};

export default App;
// для гіт 2/2 filtered menu feature
