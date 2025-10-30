import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const  books=[
{
   author: 'Jordan Moore',
   title: 'Interesting Facts For Curious Minds',
   img : '/book1.jpg',
   id : 1
},
{
  author: 'Alex Michaelides',
  title: 'THE SILENT PATIENT',
  img:'https://m.media-amazon.com/images/I/81JJPDNlxSL._AC_UY218_.jpg',
  id : 2
},
]



function BookList() {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}
// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     console.log(e);
   
//     console.log(`Input Name : ${e.target.name}`);
//     console.log(`Input Value : ${e.target.value}`);
    
//   };
//   const handleButtonClick = () => {
//     alert('handle button click');
//   };
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log('form submitted');
//   };
//   return (
//     <section>
      
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type='text'
//           name='example'
//           onChange={handleFormInput}
//           style={{ margin: '1rem 0' }}
//         />
       
//         <button type='submit'>submit form</button>
//       </form>
//       <button onClick={handleButtonClick}>click me</button>
//     </section>
//   );
// };
const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={() => console.log('you clicked me')}>click me</button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author,id } = props;
  const displayTitle = () => {
    console.log(title);
  };

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{author} </h4>
      <h5>{id}</h5>
    </article>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);