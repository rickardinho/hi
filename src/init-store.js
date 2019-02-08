import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/index';


export function initStore (initialState) {

    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware, logger),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );
}

export const store = initStore();
