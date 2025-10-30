
import { useState } from 'react';

const UseStateBasics = () => {
  

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);

    
  };
  return (
    
    <div>
      <h4>magic happens {count} times</h4>
      <button className='btn' onClick={handleClick}>
        magic
      </button>
    </div>
  );
};


export default UseStateBasics;

