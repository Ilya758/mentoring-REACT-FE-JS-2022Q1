import Header from '../Header';
import { THeaderWithColorProps } from './model';

// this component behaves self like a function that takes color, than return an another component whose color === color - prop

const HeaderWithColor = ({ color }: THeaderWithColorProps) => {
  const header = <Header color={color} name="1" />;

  return header;
};

export default HeaderWithColor;
