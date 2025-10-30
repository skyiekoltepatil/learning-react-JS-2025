import React from 'react';
import { data } from '../../../data';
console.log(data)

const UseStateArray = () => {
  const [people, People] = React.useState(data);

  const magic = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    People(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => magic(id)}>magic</button>
          </div>
        )
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => People([])}
      >
        click to see magic
      </button>
    </div>
  );
};

export default UseStateArray;
