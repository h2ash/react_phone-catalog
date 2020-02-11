import {
  ADD_ITEM_TO_BASKET,
  PHONES_FROM_STORAGE,
  INCREASE_QUANTITY_IN_BASKET,
  DECREASE_QUANTITY_IN_BASKET,
  DELETE_ITEM_FROM_BASKET,
  CLEAR_BASKET,
} from '../../lib/constants';

// eslint-disable-next-line consistent-return
export const itemsInBasket = (state = [], action) => {
  switch (action.type) {
    case PHONES_FROM_STORAGE:
      return action.payload;
    case ADD_ITEM_TO_BASKET:
      return action.arrayToReplace;
    case INCREASE_QUANTITY_IN_BASKET:
      return action.arrayToReplace;
    case DECREASE_QUANTITY_IN_BASKET:
      return action.arrayToReplace;
    case DELETE_ITEM_FROM_BASKET:
      return action.arrayToReplace;
    case CLEAR_BASKET:
      return [];
    default:
      return state;
  }
};
