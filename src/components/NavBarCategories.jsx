import React from "react";
import { books } from "../../config/data";
import "./navBar.css";

export default function NavBarCategories({ categories, setBooksNotBerrowed }) {
  const handleClick = (category) => {
    const feilterBooks = books.filter((book) => {
      return book.category == category;
    });

    setBooksNotBerrowed(feilterBooks);
  };

  return (
    <div className="conainerNavCategories">
      {categories.map((category, i) => {
        return (
          <p key={i} onClick={() => handleClick(category)}>
            {category}
          </p>
        );
      })}
    </div>
  );
}
