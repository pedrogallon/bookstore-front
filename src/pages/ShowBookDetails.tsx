import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { ImArrowLeft, ImCart } from "react-icons/im";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import Sidenav from "../components/Sidenav";
import api from "../services/api";

import "../styles/pages/bookdetails.css";
import moment from "moment";

interface BookParams {
  id: string;
}

interface Book {
  id: string;
  name: string;
  author: string;
  description: string;
  image_url: string;
  price: number;
  publication_date: Date;
}

function ShowBookDetails() {
  const history = useHistory();

  const params = useParams<BookParams>();
  const { id } = params;



  const [book, setBook] = useState<Book>();

  useEffect(() => {
    api.get(`books/${id}`).then((res) => {
      setBook(res.data);
    });
  }, []);

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
    <div id="page-details">
      <Sidenav />
      <main>
        <header>
          <Link to="/">
            <ImArrowLeft size={25} color="var(--blackish)" />
          </Link>
          <h1 className="page-title">Book details</h1>
        </header>

        <div className="detail-container">
          <div className="top-side">
            <div className="image-block">
              <img src={book?.image_url} alt="" />
            </div>
            <div className="text-block">
              <p className="name">{book?.name}</p>
              <p className="author">by {book?.author}</p>
            </div>
            <div className="price-block">
              <p className="price">
                ${book?.price.toFixed(2).replace(".", ",")}
              </p>
              <button>
                <ImCart />
                Add to cart
              </button>
              <p className="like-text">Do you like this book?</p>
              <div className="like-bt-container">
                <AiFillLike
                  size={40}
                  color={likeColor}
                  onClick={handleLikeClicked}
                />{" "}
                <AiFillDislike
                  size={40}
                  color={dislikeColor}
                  onClick={handleDislikeClicked}
                />
              </div>
            </div>
          </div>
          <div className="bottom-side">
            <p className="publication">
              Publication date:{" "}
              {moment(book?.publication_date).format("DD/MM/YYYY")}
            </p>
            <p className="description">{book?.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
export default ShowBookDetails;
