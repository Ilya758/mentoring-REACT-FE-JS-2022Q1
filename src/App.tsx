import { useEffect, useState } from 'react';
import HeaderWithColor from './components/HeaderWithColor';
import { collectionOfColors } from './constants/collectionOfColors';

// the responsibility of App component is to draw another component, no side logic with set-stating, it was an old way to create apps, modern web apps are using instruments like Redux to store the state into a separate file and provide it for root index.tsx

// so, it's just an example

const App = () => {
  const [requiredColor, setRequiredColor] = useState('');

  useEffect(() => {
    const color = collectionOfColors[Math.floor(Math.random() * 15)];

    setRequiredColor(color);
  }, []);

  return (
    <>
      <HeaderWithColor color={requiredColor || 'blue'} />
    </>
  );
};

/** 
 * the correct structure
 * no any logic instead of visual
 * the props drilling is ALLOWED, but do we really need it?
const App = ({someProp}: TSomeProps) => {
  return (
    <>
      <HeaderWithColor color={someProp} />
    </>
  );
};
 */

export default App;

