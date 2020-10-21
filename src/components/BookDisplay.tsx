import React from "react";
import { Link } from "react-router-dom";
// import { ImBook, ImPlus } from "react-icons/im";

import "../styles/components/book-display.css";

interface Display {
  id: number;
  name: string;
  author: string;
  image: string;
  price: number;
}

export default function BookDisplay({
  id,
  name,
  author,
  image,
  price,
}: Display) {
  return (
    <div key={id} className="book-display">
      <img src={image} alt="" />
      <p className="book-name">{name}</p>

      <p className="book-author">{`by ${author}`}</p>

      <p className="book-price">{`$${price.toFixed(2).toString().replace(".",",")}`}</p>
      <Link to={`/book/${id}`} className="book-show-link">
        <button>Show Details</button>
      </Link>
    </div>
  );
}
