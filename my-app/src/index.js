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
const author = 'Jordan Moore';

const Book = () => {
  const title = 'Interesting Facts For Curious Minds';
  return (
    <article className='book'>
      <img
        src='/book1.jpg'
        alt='Interesting Facts For Curious Minds'
      />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <p>{50 + 50}</p>
    </article>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);