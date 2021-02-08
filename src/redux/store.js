import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';
import rootReducer from "./root-reducer";
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const middlewares = [thunk, logger];

if(process.env.NODE_ENV === 'devlopment'){
  middlewares.push(logger);
};

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };