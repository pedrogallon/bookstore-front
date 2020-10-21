import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import "../styles/pages/createbook.css";

/*
{
  "id": 8,
  "name": "As Crônicas de Nárnia",
  "author": "C. S. Lewis",
  "description": "Viagens ao fim do mundo, criaturas fantásticas e batalhas épicas entre o bem e o mal - o que mais um leitor poderia querer de um livro? O livro que tem tudo isso é O leão, a feiticeira e o guarda-roupa, escrito em 1949 por Clive Staples Lewis. MasLewis não parou por aí. Seis outros livros vieram depois e, juntos, ficaram conhecidos como As crônicas de Nárnia. Nos últimos cinqüenta anos, As crônicas de Nárnia transcenderam o gênero da fantasia para se tornar parte do cânone da literaturaclássica.",
  "isbn": "857827069X",
  "image_url": "https://images-na.ssl-images-amazon.com/images/I/51+2QAB7I+L._SX329_BO1,204,203,200_.jpg",
  "price": 23.65,
  "publication_date": "2009-02-08T00:00:00.000Z"
}*/

function CreateBook() {
  const [name, setName] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isbn, setIsbn] = useState<string>("");
  const [image_url, setImgUrl] = useState<string>("");
  const [price, setPrice] = useState<number>(0.0);
  const [publication_date, setPublicationDate] = useState<string>("");

  return (
    <div id="page-create">
      <Sidenav />
      <main>
        <header>
          <h1 className="page-title">Create a new book</h1>
        </header>

        <div className="form-container">
          <form className="create-book">
            <fieldset>
              <div className="input-block">
                <label htmlFor="name">Name:</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                />
              </div>
              <div className="input-block">
                <label htmlFor="author">Author:</label>
                <input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  type="text"
                  name="author"
                />
              </div>
              <div className="input-block">
                <label htmlFor="description">Description:</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                />
              </div>
              <div className="input-block">
                <label htmlFor="isbn">ISBN-10:</label>
                <input
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                  type="text"
                  name="isbn"
                  minLength={10}
                  maxLength={10}
                />
              </div>
              <div className="input-block">
                <label htmlFor="image_url">Image URL:</label>
                <input
                  value={image_url}
                  onChange={(e) => setImgUrl(e.target.value)}
                  type="url"
                  name="image_url"
                />
              </div>
              <div className="input-block">
                <label htmlFor="price">Price:</label>
                <input
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  type="text"
                  name="price"
                  min={0}
                  step="any"
                />
              </div>
              <div className="input-block">
                <label htmlFor="publication_date">Publication date:</label>
                <input
                  value={publication_date}
                  onChange={(e) => setPublicationDate(e.target.value)}
                  type="date"
                  name="publication_date"
                  max={new Date().toISOString().split("T")[0]}
                />
              </div>
            </fieldset>
          </form>
        </div>
      </main>
    </div>
  );
}
export default CreateBook;
