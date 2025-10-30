import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('shruti');
  const [age, setAge] = useState(18);
  const [talk, setTalk] = useState('hello');

  const displayPerson = () => {
    setName('skyie');
    setAge(17);
    setTalk('HI');
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>says: {talk}</h4>
      <button className='btn' onClick={displayPerson}>
        show skyie
      </button>
    </>
  );
};
export default UseStateObject;
