// useState
// useEffect
// useRef
// useReducer
// useContext
// useCallback
// useMemo
// forwardRef - not hook
// useImperativeHandle

// App (state + props + context) =>
// Stateless => Component + props
// Smart => Component + context + state + props
// Static (props) / dynamic (context + state + props) !!!

import UseContextApp from './hooks/useContextHook';
import UseMemoUseCallbackHook from './hooks/useMemoUseCallbackHook';
import UseReducerApp from './hooks/useReducerHook';
import UseReducerUseRefApp from './hooks/useReducerUseRef';
import UseStateApp from './hooks/useStateHook';

const App = () => {
  return (
    <>
      <UseStateApp />
      <UseReducerApp />
      <UseContextApp />
      <UseReducerUseRefApp />
      <UseMemoUseCallbackHook />
    </>
  );
};

export default App;

