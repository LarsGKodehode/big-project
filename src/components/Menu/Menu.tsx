// Types
import { MenuProps } from './Menu.d';
import { CSSProperties } from 'react';


/**
 * Custom Menu for site
 */
function Menu(props: MenuProps): JSX.Element {
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
      <h1>Menu</h1>
    </nav>
  );
};

export default Menu;