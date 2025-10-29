import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const  Books=[
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
const names= ['bole','fatty','shruti'];
const newNames = names.map((name) =>{
  return <h1>{name}</h1>
}
);
console.log(newNames)







const BookList = () => {
  return (
    <section className="booklist">
       {newNames}
        
    </section>
  );
};

const Book = (props) => {
  const {img,author,title, children} = props;
  return (
    <article className='book'>
      <img src= {props.img} alt={props.title}/>
       <h2>{props.title}</h2>
       <h4>{props.author}</h4>
        <p>hello</p>
        <button>click me</button>
      </article>
      
        
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);