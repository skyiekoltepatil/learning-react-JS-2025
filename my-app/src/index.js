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
        const{img,title,author,}= book;
        return <Book img={img} title={title} author={author} />;

       })};
       
        <EventExamples/>
    </section>
  );
};
const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    // console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/* add button with type='submit' */}
        <button type='submit'>submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
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