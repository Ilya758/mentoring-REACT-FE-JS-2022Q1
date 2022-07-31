// useReducer
// more powerful useState version
// is using to set state to the object-stored state
// useReducer accepts reducer-function, initArg, initCbFunc (analog to initArg, but with some operations you want apply to)
// see the store folder for complete structure of a reducer-store

import { useReducer } from 'react';
import { actionCreators, countReducer, initialState } from '../store';

const { decrementAction, incrementAction, randomPlusAction } = actionCreators;

const UseReducerApp = () => {
  const [{ count }, dispatch] = useReducer(countReducer, null, () => {
    return initialState;
  });

  const dec = () => {
    dispatch(decrementAction());
  };

  const inc = () => {
    dispatch(incrementAction());
  };

  const randomPlus = () => {
    const payload = Math.floor(Math.random() * 10);
    dispatch(randomPlusAction(payload));
  };

  return (
    <div>
      <button onClick={dec}>Dec</button>
      <button onClick={randomPlus}>+random</button>
      <span style={{ color: 'red', font: '20px Roboto, sans-serif' }}>
        {count}
      </span>
      <button onClick={inc}>Inc</button>
    </div>
  );
};

export default UseReducerApp;
