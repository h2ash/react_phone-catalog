import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadingStatus } from './reducers/loadingStatus';
import { loadedPhones } from './reducers/loadedPhones';

const rootReducer = combineReducers({
  loadingStatus,
  loadedPhones,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
