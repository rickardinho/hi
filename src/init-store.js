import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from './reducers/index';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export function initStore (initialState) {

    return createStore(
        persistedReducer,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware, logger),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );
}

export const store = initStore();

export const persistor = persistStore(store);

/*
to clear the old app state in AsyncStorage:
1. uncomment the line below
2. run the app once for each OS - the app state will be purged
3. delete the line below
 */

// persistor.purge();
