// Types
import { NavbarProps } from './Navbar.d';
import { CSSProperties } from 'react';


/**
 * Custom Navbar for this site
 */
function Navbar(props: NavbarProps): JSX.Element {
  // Destructure props
  const { style } = props;

  // Construct props
  const containerStyle: CSSProperties = {
    minWidth: '100%',
    minHeight: '100%',
    backgroundColor: '#599999',
    ...style,
  };

  const containerProps = {
    style: containerStyle,
  };

  return(
    <nav {...containerProps}>
      <h1>Navbar</h1>
    </nav>
  );
};

export default Navbar;