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
const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
    Jordan Moore
  </h4>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);