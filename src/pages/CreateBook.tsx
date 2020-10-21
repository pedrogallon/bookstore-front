import React, { FormEvent, useState } from "react";
import Sidenav from "../components/Sidenav";
import InputMask from "react-input-mask";
import NumberFormat from "react-number-format";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert2'
import api from "../services/api";

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
  const history = useHistory();

  const [name, setName] = useState<string>("Book Name");
  const [author, setAuthor] = useState<string>("Author");
  const [description, setDescription] = useState<string>("Description");
  const [isbn, setIsbn] = useState<string>("1234512345");
  const [image_url, setImgUrl] = useState<string>("https://google.com");
  const [price, setPrice] = useState<number>(10.0);
  const [publication_date, setPublicationDate] = useState<string>("2020-10-10");




  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    data.append("name", name);
    data.append("author", author);
    data.append("description", description);
    data.append("isbn", isbn);
    data.append("image_url", image_url);
    data.append("price", price.toFixed(2));
    data.append("publication_date", publication_date);

    console.log(
      data.get("name"), data.get("author"), data.get("description"), data.get("isbn"), data.get("price"), data.get("publication_date")
    )

    await api.post("/books", data)
      .then((res) => {
        console.log(res);
        swal.fire("Success!", "Book created!", "success").then(() => {
          history.push("/");
        });
      })
      .catch((res) => {
        console.log("error: " + res);
        swal.fire(
          "Oh no!",
          "We got an error. Try again later!",
          "error"
        );
      });
      
  }

  return (
    <div id="page-create">
      <Sidenav />
      <main>
        <header>
          <h1 className="page-title">Create a new book</h1>
        </header>

        <div className="form-container">
          <form className="create-book" onSubmit={handleSubmit}>
            <fieldset>
              <div className="input-block">
                <label htmlFor="name">Name:</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="input-block">
                <label htmlFor="author">Author:</label>
                <input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  type="text"
                  name="author"
                  required
                />
              </div>
              <div className="input-block">
                <label htmlFor="description">Description:</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                  required
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
                  size={10}
                  required
                />
              </div>
              <div className="input-block">
                <label htmlFor="image_url">Image URL:</label>
                <input
                  value={image_url}
                  onChange={(e) => setImgUrl(e.target.value)}
                  type="url"
                  name="image_url"
                  required
                />
              </div>
              <div className="input-block input-block-half">
                <label htmlFor="price">Price ($):</label>
                <input
                  // decimalSeparator={true}
                  // displayType={'text'}
                  value={price}
                  onChange={(e) =>
                    setPrice(parseFloat(parseFloat(e.target.value).toFixed(2)))
                  }
                  type="number"
                  name="price"
                  min={0}
                  step="any"
                  required
                />
              </div>
              <div className="input-block input-block-half">
                <label htmlFor="publication_date">Publication date:</label>
                <input
                  value={publication_date}
                  onChange={(e) => setPublicationDate(e.target.value)}
                  type="date"
                  name="publication_date"
                  max={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
            </fieldset>
            <button className="confirm-button" type="submit">
              Create
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
export default CreateBook;
