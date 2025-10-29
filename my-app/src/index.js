import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const  books=[
{
   author: 'Jordan Moore',
   title: 'Interesting Facts For Curious Minds',
   img : '/book1.jpg',
  
},
{
  author: 'Alex Michaelides',
  title: 'THE SILENT PATIENT',
  img:'https://m.media-amazon.com/images/I/81JJPDNlxSL._AC_UY218_.jpg',
},
]



const BookList = () => {
  return (
    <section className="booklist">
       {books.map((book)=>{
        const{img,title,author} = book;
        return <Book img={img} title={title} author={author}/>

       })};
        
    </section>
  );
};

const Book = (props) => {
  const {img,author,title} = props;
  return (
    <article className='book'>
      <img src= {img} alt={title}/>
       <h2>{title}</h2>
       <h4>{author}</h4>
        
      </article>
      
        
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);