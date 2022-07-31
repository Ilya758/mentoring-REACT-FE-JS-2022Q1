// useState

// 1. setState vs 2.useState
// 1) create state
// 2) imitate

// use every time you want to create a simple state holder
// usage:
// const [count, setCount] = useState<number>(0) // first arg is what you can read, second - the updating function (unique for this state)

// useful for PRIMITIVES, but allowed to use with objects
// think about useState as a local microstore, that handles operations with set/get/updat(-ing) data

import { useState } from 'react';

const UseStateApp = ({ name, age }: { name?: string; age?: number }) => {
  // const [count, setCount] = useState<number>(0); // first method to set init value
  const [count, setCount] = useState<number>(() => 0); // add. method

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(prevState => prevState + 1);
    // setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click {count}</button>
    </div>
  );
};

export default UseStateApp;
