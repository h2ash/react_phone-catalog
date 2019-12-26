import {
  BASE_URL,
  SWITCH_IS_LOADED,
  SWITCH_IS_LOADING,
  DOWNLOAD_PHONES,
  PHONES_FROM_STORAGE,
  ADD_ITEM_TO_BASKET,
  INCREASE_QUANTITY_IN_BASKET,
  DECREASE_QUANTITY_IN_BASKET,
  DELETE_ITEM_FROM_BASKET,
  CLEAR_BASKET,
} from '../../lib/constants';

export const changeIsLoading = valueIsLoading => ({
  type: SWITCH_IS_LOADING,
  valueIsLoading,
});

export const changeIsLoaded = valueIsLoaded => ({
  type: SWITCH_IS_LOADED,
  valueIsLoaded,
});

export const downloadPhones = phones => ({
  type: DOWNLOAD_PHONES,
  phones,
});

// export const phonesFromStorage = phones => ({
//   type: PHONES_FROM_STORAGE,
//   phones,
// });

export const addItemToBasket = itemToAdd => ({
  type: ADD_ITEM_TO_BASKET,
  itemToAdd,
});

export const increaseItemInBasket = itemToIncrease => ({
  type: INCREASE_QUANTITY_IN_BASKET,
  itemToIncrease,
});

export const decreaseItemInBasket = itemToDecrease => ({
  type: DECREASE_QUANTITY_IN_BASKET,
  itemToDecrease,
});

export const deleteItemFromBasket = itemToDelete => ({
  type: DELETE_ITEM_FROM_BASKET,
  itemToDelete,
});

export const clearBasket = () => ({
  type: CLEAR_BASKET,
});

export const getPhonesThunk = () => async(dispatch) => {
  dispatch(changeIsLoading(true));
  dispatch(changeIsLoaded(false));

  const responsePhones = await fetch(`${BASE_URL}/api/phones.json`);
  const phones = await responsePhones.json();

  dispatch(downloadPhones(phones));
  dispatch(changeIsLoading(false));
  dispatch(changeIsLoaded(true));
};
