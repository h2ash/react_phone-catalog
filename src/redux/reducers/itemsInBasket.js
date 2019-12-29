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
    // case PHONES_FROM_STORAGE:
    //   return [action.phones];
    case ADD_ITEM_TO_BASKET: {
      const currentIndex = [...state].findIndex(
        element => element.id === action.itemToAdd.id
      );

      if (currentIndex < 0) {
        const requiredItem = { ...action.itemToAdd };

        requiredItem.quantity = 1;

        return [...state, requiredItem];
      }

      return state;
    }

    case INCREASE_QUANTITY_IN_BASKET:
      return [...state].map((phone) => {
        if (phone.id === action.itemToIncrease) {
          // eslint-disable-next-line no-param-reassign
          phone.quantity += 1;
        }

        return phone;
      });

    case DECREASE_QUANTITY_IN_BASKET:
      return [...state].map((phone) => {
        if (phone.id === action.itemToDecrease) {
          // eslint-disable-next-line no-param-reassign
          phone.quantity -= 1;
        }

        return phone;
      });
    case DELETE_ITEM_FROM_BASKET:
      return [...state].filter(phone => phone.id !== action.itemToDelete);
    case CLEAR_BASKET:
      return [];
    default:
      return state;
  }
};
