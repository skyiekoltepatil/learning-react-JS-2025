
import { useState } from 'react'
const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

 const handleClick = () => {
  setTimeout(() => {
    console.log('no of button');
    setValue((currentState) => {
      return currentState + 1;
    });
  }, 2000);
};
  return (
    <div>
      <h1>{value}</h1>
      <button className='btn' onClick={handleClick}>
       click Me
      </button>
    </div>
  );
};
export default UseStateGotcha;