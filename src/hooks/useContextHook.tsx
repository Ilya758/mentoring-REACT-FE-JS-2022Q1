// useContext
// use to create some options, essential props, stylization, that relates with the whole app structure
// recommend to use with styles, avoid sharing state/functions (imho, + read some articles about it)

import { useContext } from 'react';
import { AppContext } from '../context/appContext';

const Child = () => {
  const style = {
    width: '100px',
    height: '100px',
    background: 'green',
    border: '1px solid',
  };

  const { background } = useContext(AppContext);

  return <div style={{ ...style, background }}>Content</div>;
};

const UseContextApp = () => {
  return (
    <div>
      <AppContext.Provider value={{ background: 'red' }}>
        <Child />
      </AppContext.Provider>
    </div>
  );
};

export default UseContextApp;
