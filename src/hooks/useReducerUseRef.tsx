// useEffect + useRef;
// useEffect effectively useful for imperative tricks with DOM
// by default when y're using React, AVOID using
/**
 * - querySelectors
 * - getElementById
 * - getBoundingClientRect
 * - addEventListener
 * - etc
 */
// use useEffect to write imperative manipulations
// useEffect(() => {
// ...body
// return () => {} // guarantee that effect will be RESET, in case of yre set listeners, or other manipulations
// }, [deps]) deps are the array of props, if they change, the useEffect FIRES
// if there no any deps, it behaves itself like componentDidMount hook

import { useState, useEffect } from 'react';

const UseReducerUseRefApp = () => {
  const [title, setTitle] = useState<string>('');
  const [changeTitle, setChangeTitle] = useState<boolean>(false);
  const [focusRef, setFocusRef] = useState<boolean>(false);

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(value);
  };

  const handleClick = () => {
    console.log('handleClick. setChangeTitle');
    setChangeTitle(true);
  };

  let inputRef: HTMLInputElement | null = null;

  const setInputRef = (ref: HTMLInputElement) => {
    inputRef = ref;
  };

  const handleButtonFocusClick = () => {
    setFocusRef(true);
  };

  useEffect(() => {
    // componentDidMount => first render
    // componentDidUpdate => sequently render with changing state
    // componentWillUnmount => unmounting

    if (changeTitle) {
      console.log('useEffect. change title');
      setChangeTitle(false);
      document.title = title;
    }

    return () => {
      setTimeout(() => {
        document.title = '0';
        document.removeEventListener('click', () => {});
      }, 5000);
    };
  }, [setChangeTitle, title, changeTitle]);

  useEffect(() => {
    if (focusRef && inputRef) {
      setFocusRef(false);

      inputRef.focus();
    }
  }, [focusRef, inputRef]);

  console.log('render');

  return (
    <div>
      <button onClick={handleClick}>Change title</button>
      <div>
        <input
          ref={setInputRef}
          type="text"
          value={title}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleButtonFocusClick}>Focus!</button>
    </div>
  );
};

export default UseReducerUseRefApp;

// declaration => React => ReactDomVirtual ===> Virtual DOM
// imperation => Virtual DOM
