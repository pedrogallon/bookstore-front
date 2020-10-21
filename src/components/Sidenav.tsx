import React from "react";
import { Link } from "react-router-dom";
import { ImBooks, ImBook, ImPlus } from "react-icons/im";

import "../styles/components/sidenav.css";

export default function Sidenav() {
  return (
    <nav className="sidenav">
      <header>
        <ImBooks size={80} color="var(--blackish)" />
        <h3>Contoso Books</h3>
      </header>
      <ul>
        <li>
          <Link to="/">
            <ImBook size={18} color="var(--blackish)" /> Browse books
          </Link>
        </li>
        <li>
          <Link to="/create">
            <ImPlus size={18} color="var(--blackish)" /> Create book
          </Link>
        </li>
      </ul>
      <footer>
        <a href="https://github.com/pedrogallon" target="_blank" rel='noopener noreferrer'>
          @pedrogallon
        </a>
      </footer>
    </nav>
  );
}
