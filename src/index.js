import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Book from "./Book";

const books = [
  {
    id: 1,
    title: "Ramesh",
    author: "jvshajkj",
    img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
  },
  {
    id: 2,
    title: "Ramesh",
    author: "jvshajkj",
    img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
  },
  {
    id: 3,
    title: "Ramesh",
    author: "jvshajkj",
    img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
  },
];
const Booklist = () => {
  return (
    <section className="bookList">
      {books.map((book, index) => {
        const { img, title, author, id } = book;
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Booklist />
  </React.StrictMode>
);
