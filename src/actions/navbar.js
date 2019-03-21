// import initSocket from '../socket-router';
require('dotenv').config();

export const OPEN_BURGER = 'OPEN_BURGER';
export const CLOSE_BURGER = 'CLOSE_BURGER';


export const openBurger = () => ({
  type: OPEN_BURGER
});

export const closeBurger = () => ({
  type: OPEN_BURGER
});
