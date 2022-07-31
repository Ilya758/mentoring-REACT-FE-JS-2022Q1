// useState
// useEffect
// useRef
// useReducer
// useContext
// useCallback
// useMemo
// forwardRef - not hook
// useImperativeHandle

import {
  createRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import { AppContext } from './context/appContext';
import {
  countReducer,
  actionCreators,
  actionTypes,
  initialState,
} from './store';
// import {
//   decrementAction,
//   incrementAction,
//   randomPlusAction,
// } from './store/actionCreators';
// import { countReducer, initialState } from './store/reducer';

// 1. setState vs 2.useState
// 1) create state
// 2) imitate

// useState
// use every time you want to create a simple state holder
// usage:
// const [count, setCount] = useState<number>(0) // first arg is what you can read, second - the updating function (unique for this state)
// useful for PRIMITIVES, but allowed to use with objects
// think about useState as a local microstore, that handles operations with set/get/updat(-ing) data

// const App = ({ name, age }: { name: string; age: number }) => {
//   // const [count, setCount] = useState<number>(0); // first method to set init value
//   const [count, setCount] = useState<number>(() => 0); // add. method

//   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     setCount(prevState => prevState + 1);
//     // setCount(count + 1);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click {count}</button>
//     </div>
//   );
// };

// export default App;

// useReducer
// more powerful useState version
// is using to set state to the object-stored state
// useReducer accepts reducer-function, initArg, initCbFunc (analog to initArg, but with some operations you want apply to)
// see the store folder for complete structure of a reducer-store

// const { decrementAction, incrementAction, randomPlusAction } = actionCreators;

// const App = () => {
//   const [{ count }, dispatch] = useReducer(countReducer, null, () => {
//     return initialState;
//   });

//   const dec = () => {
//     dispatch(decrementAction());
//   };

//   const inc = () => {
//     dispatch(incrementAction());
//   };

//   const randomPlus = () => {
//     const payload = Math.floor(Math.random() * 10);
//     dispatch(randomPlusAction(payload));
//   };

//   return (
//     <div>
//       <button onClick={dec}>Dec</button>
//       <button onClick={randomPlus}>+random</button>
//       <span style={{ color: 'red', font: '20px Roboto, sans-serif' }}>
//         {count}
//       </span>
//       <button onClick={inc}>Inc</button>
//     </div>
//   );
// };

// export default App;

// App (state + props + context) =>
// Stateless => Component + props
// Smart => Component + context + state + props
// Static (props) / dynamic (context + state + props) !!!

// useContext
// use to create some options, essential props, stylization, that relates with the whole app structure
// recommend to use with styles, avoid sharing state/functions (imho, + read some articles about it)

// const Child = () => {
//   const style = {
//     width: '100px',
//     height: '100px',
//     background: 'green',
//     border: '1px solid',
//   };

//   const { background } = useContext(AppContext);

//   return <div style={{ ...style, background }}>Content</div>;
// };

// const App = () => {
//   return (
//     <div>
//       <AppContext.Provider value={{ background: 'red' }}>
//         <Child />
//       </AppContext.Provider>
//     </div>
//   );
// };

// export default App;

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

// const App = () => {
//   const [title, setTitle] = useState<string>('');
//   const [changeTitle, setChangeTitle] = useState<boolean>(false);
//   const [focusRef, setFocusRef] = useState<boolean>(false);

//   const handleChange = ({
//     target: { value },
//   }: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(value);
//   };

//   const handleClick = () => {
//     console.log('handleClick. setChangeTitle');
//     setChangeTitle(true);
//   };

//   let inputRef: HTMLInputElement | null = null;

//   const setInputRef = (ref: HTMLInputElement) => {
//     inputRef = ref;
//   };

//   const handleButtonFocusClick = () => {
//     setFocusRef(true);
//   };

//   useEffect(() => {
//     // componentDidMount => first render
//     // componentDidUpdate => sequently render with changing state
//     // componentWillUnmount => unmounting

//     if (changeTitle) {
//       console.log('useEffect. change title');
//       setChangeTitle(false);
//       document.title = title;
//     }

//     return () => {
//       setTimeout(() => {
//         document.title = '0';
//         document.removeEventListener('click', () => {});
//       }, 5000);
//     };
//   }, [setChangeTitle, title, changeTitle]);

//   useEffect(() => {
//     if (focusRef && inputRef) {
//       setFocusRef(false);

//       inputRef.focus();
//     }
//   }, [focusRef, inputRef]);

//   console.log('render');

//   return (
//     <div>
//       <button onClick={handleClick}>Change title</button>
//       <div>
//         <input
//           ref={setInputRef}
//           type="text"
//           value={title}
//           onChange={handleChange}
//         />
//       </div>
//       <button onClick={handleButtonFocusClick}>Focus!</button>
//     </div>
//   );
// };

// export default App;

// declaration => React => ReactDomVirtual ===> Virtual DOM
// imperation => Virtual DOM

// useMemo + useCallback
// use useMemo when u have hard calculations to avoid rerender
// use useCallback every time u PASS the method to child components, that guarantee your component won't be rerendered

// const Counter = ({
//   count,
//   handleClick,
//   string,
// }: {
//   count: number;
//   string: string;
//   handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
// }) => {
//   return (
//     <div>
//       <div>
//         <button onClick={handleClick}>Click {count}</button>
//       </div>
//       <span style={{ color: 'red', font: '20px Roboto, sans-serif' }}>
//         {count}:{string}
//       </span>
//     </div>
//   );
// };

// const App = () => {
//   const [count, setCount] = useState<number>(0);

//   const handleClick = () => {
//     setCount(prevState => prevState + 1);
//   };

//   const cbHandleClick = useCallback(() => {
//     console.log('cbHandleClick. start memo');
//     handleClick();
//   }, []);

//   const memoCount = useMemo(() => 'string', []);

//   return (
//     <div>
//       <Counter count={count} string={memoCount} handleClick={cbHandleClick} />
//     </div>
//   );
// };

// export default App;

