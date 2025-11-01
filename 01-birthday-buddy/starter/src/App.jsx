
import  {useState}  from 'react';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((oldPeople) => {
      return oldPeople.filter((person) => person.id !== id);
    });
  };
  return (
    <main>
      <section className='BHD'>
        <h1>{people.length}today's birthday PPl</h1>
        <List people={people} removePerson={removePerson} />
         <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople([])}>
          click to remove
        </button>
      </section>
    </main>
  );
}
const List = ({ people, removePerson }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} removePerson={removePerson} />;
      })}
    </section>
  );
};
const Person = ({ image, name, age, removePerson, id }) => {
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
      <button
        type='button'
        className='btn'
        onClick={() => removePerson(id)}>
        click to remove
      </button>
    </article>
  );
};

export default App;