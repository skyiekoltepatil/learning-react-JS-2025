import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import{book} from './book.js'



const BookList = () => {
 

  return (
    <section className='booklist'>
      {book.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author,} = props;
  // console.log(props);
  const getPerticularBook = () => {
    
  };
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

     
      <h4>{author}</h4>
    </article>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);