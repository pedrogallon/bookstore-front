import React, { ChangeEvent, useEffect, useState } from "react";
import Sidenav from "../components/Sidenav";
import { ImSearch } from "react-icons/im";

import "../styles/pages/books.css";
import BookDisplay from "../components/BookDisplay";
import api from "../services/api";

interface Book {
  id: number;
  name: string;
  author: string;
  image_url: string;
  price: number;
}

function Books() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    api.get("/books").then((res) => {
      setBooks(res.data);
    });
  }, books);

  return (
    <div id="page-books">
      <Sidenav />
      <main>
        <header>
          <h1 className="page-title">Browse Books</h1>

        </header>

        <div className="books-container">
          {books.map((book) => {
            return (
              <BookDisplay
                id={book.id}
                name={book.name}
                author={book.author}
                image={book.image_url}
                price={book.price}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
export default Books;
