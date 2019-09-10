import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

// Setup the middlewares array, we can append to this later as we add more middlewares to redux
const middleware = [thunk];

// Set up the  store with a root reducer, some initial state and the redux dev tools + any middeware we want
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Then we export the store for the App to use (global state object)
export default store;
