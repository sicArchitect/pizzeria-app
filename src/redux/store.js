import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tablesReducer from './tablesRedux';

const subreducers = {
  tables: tablesReducer,
};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(),
  compose(applyMiddleware(thunk))
);

export default store;
