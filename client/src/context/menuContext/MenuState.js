import { useReducer } from 'react';
import menuReducer from './menuReducer';
import MenuContext from './menuContext';
import { OPEN_MENU, CLOSE_MENU } from '../types';

const MenuState = (props) => {
  const initialState = {
    menuIsClosed: true,
    menuIcon: 'fas fa-bars',
  };

  const [state, dispatch] = useReducer(menuReducer, initialState);

  //Actions :
  const openMenu = () => {
    dispatch({ type: OPEN_MENU });
  };

  const closeMenu = () => {
    dispatch({ type: CLOSE_MENU });
  };

  return (
    <MenuContext.Provider
      value={{
        menuIsClosed: state.menuIsClosed,
        menuIcon: state.menuIcon,
        openMenu,
        closeMenu,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuState;
