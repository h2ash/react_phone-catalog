import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadingStatus } from './reducers/loadingStatus';
import { loadedPhones } from './reducers/loadedPhones';
import { itemsInBasket } from './reducers/itemsInBasket';

const rootReducer = combineReducers({
  loadingStatus,
  loadedPhones,
  itemsInBasket,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
