import { THeaderProps } from '../../models/THeaderProps';
import { array, HeaderConstants } from './constants';

/**
 * So, you've decided to create a component :)
 * Follow these *convenient* rules
 * 1) create a folder that describe a component like "Header"
 * 2) create an index.tsx
 * 3) do your stuff with classical / functional component
 *
 * The way to create easy app architecture:
 * 1) decompose your app into separate components
 * 2) create their STATIC definintion (it means "dummy visual, only components that draw UI with props, nothing else )
 * 3) create (classical components) / imitate (functional components) STATE of a component (if it needs), than drill it like props
 * 4) locate the STATE (lift up) if it needs (in case of Redux the Store must be PREDICTABLE, so follow their instruction, and life'll be OK)
 * 5) refactor / improve / profit !
 */

const Header = ({ color, name, children }: THeaderProps) => {
  // as you can see, the type of props IS located in separate file (in this case models-folder)
  return (
    <div style={{ color }}>
      {name === HeaderConstants.name ? <h1>{name}</h1> : <h1>Preloader</h1>}
      {color}
      <h2>{children}</h2>
      {
        <ul>
          {array.map(({ id, prop }) => (
            <li key={id}>
              <p>prop: {prop}</p>
              <h2>{children}</h2>

              <p>id: {id}</p>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Header;
