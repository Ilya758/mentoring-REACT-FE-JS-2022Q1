// useMemo + useCallback
// use useMemo when u have hard calculations to avoid rerender
// use useCallback every time u PASS the method to child components, that guarantee your component won't be rerendered

import { useState, useCallback, useMemo } from 'react';

const Counter = ({
  count,
  handleClick,
  string,
}: {
  count: number;
  string: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div>
      <div>
        <button onClick={handleClick}>Click {count}</button>
      </div>
      <span style={{ color: 'red', font: '20px Roboto, sans-serif' }}>
        {count}:{string}
      </span>
    </div>
  );
};

const UseMemoUseCallbackHook = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(prevState => prevState + 1);
  };

  const cbHandleClick = useCallback(() => {
    console.log('cbHandleClick. start memo');
    handleClick();
  }, []);

  const memoCount = useMemo(() => 'string', []);

  return (
    <div>
      <Counter count={count} string={memoCount} handleClick={cbHandleClick} />
    </div>
  );
};

export default UseMemoUseCallbackHook;
