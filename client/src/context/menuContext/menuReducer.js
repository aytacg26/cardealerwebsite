import { OPEN_MENU, CLOSE_MENU } from '../types';

const menuReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case OPEN_MENU:
      return {
        ...state,
        menuIsClosed: false,
        menuIcon: 'fas fa-times',
      };
    case CLOSE_MENU:
      return {
        ...state,
        menuIsClosed: true,
        menuIcon: 'fas fa-bars',
      };

    default:
      return state;
  }
};

export default menuReducer;
