import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="item-container">
      {items.map((menuItem) => {
        const { id, title, category, price, img, desc } = menuItem;
        return (
          <article key={id} className="single-item">
            <img src={img} className="item-image" />
            <div className="item-info">
                <div className="title-block">
                  <span className="title">{title}</span>
                  <span className="item-price">₴ {price}</span>
                </div>
                <p className="item-desc">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
