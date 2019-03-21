import * as navbar from '../actions/navbar';

export const OPEN_BURGER = 'OPEN_BURGER';
export const CLOSE_BURGER = 'CLOSE_BURGER';


export const initialState = {
  burgerIsOpen: false
};

export default function nav (state = initialState, action) {
  switch (action.type) {

    case navbar.OPEN_BURGER:
      return {
        ...state,
        burgerIsOpen: true
      };

    case navbar.CLOSE_BURGER:
      return {
        ...state,
        burgerIsOpen: false
      };

    default:
      return state;
  }
}
