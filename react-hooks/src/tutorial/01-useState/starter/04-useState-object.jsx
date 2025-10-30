import { useState } from 'react';

const UseStateObject = () => {
const [person,setPerson]= useState ({
   name : 'shruti',
   age : 18,
   talk : 'hello',
   
});
  const displayPerson = () => {
    setPerson ({name:'skyie',age:17,talk:'HI',
      // setPerson({ name: 'fatty' });
    // setPerson({ ...person, name: 'fatty' });
  })};
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4> says: {person.talk}</h4>
      <button className='btn' onClick={displayPerson}>
        show skyie
      </button>
    </>
  );
};
export default UseStateObject
