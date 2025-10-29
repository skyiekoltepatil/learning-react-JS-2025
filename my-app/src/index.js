import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Title></Title>
      <Image></Image>

      <Author></Author>
    </article>
  );
};

const Image = () => (
  <img src="./book1.img" alt="Diary of a Wimpy Kid" className="book img"></img>
);
const Title = () => <h2>Diary of a Wimpy Kid</h2>;
const Author = () => {
  return <h2>Jeff Kinney</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);