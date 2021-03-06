import React, { useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
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


  const [likeColor, setLikeColor] = useState<string>();
  const [dislikeColor, setDislikeColor] = useState<string>();
  function handleLikeClicked(){
    setLikeColor("var(--yellow)");
    setDislikeColor("#afafaf");
  }

  function handleDislikeClicked(){
    setDislikeColor("var(--yellow)");
    setLikeColor("#afafaf");
  }

  return (
    <div key={id} className="book-display">
      <img src={image} alt="" />
      <p className="book-name">{name}</p>

      <p className="book-author">{`by ${author}`}</p>

      {/* <p className="book-price">{`$${price.toFixed(2).toString().replace(".",",")}`}</p> */}
      <div className="like-bt-container">
                <AiFillLike
                  size={20}
                  color={likeColor}
                  onClick={handleLikeClicked}
                />{" "}
                <AiFillDislike
                  size={20}
                  color={dislikeColor}
                  onClick={handleDislikeClicked}
                />
              </div>
      <Link to={`/book/${id}`} className="book-show-link">
        <button>Show Details</button>
      </Link>
    </div>
  );
}
