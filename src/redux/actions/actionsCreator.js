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
  CHANGE_CURRENT_PAGE,
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

export const phonesFromStorage = phones => ({
  type: PHONES_FROM_STORAGE,
  phones,
});

export const addItemToBasket = arrayToReplace => ({
  type: ADD_ITEM_TO_BASKET,
  arrayToReplace,
});

export const increaseItemInBasket = arrayToReplace => ({
  type: INCREASE_QUANTITY_IN_BASKET,
  arrayToReplace,
});

export const decreaseItemInBasket = arrayToReplace => ({
  type: DECREASE_QUANTITY_IN_BASKET,
  arrayToReplace,
});

export const deleteItemFromBasket = arrayToReplace => ({
  type: DELETE_ITEM_FROM_BASKET,
  arrayToReplace,
});

export const clearBasket = () => ({
  type: CLEAR_BASKET,
});

export const addItemToBasketThunk = phone => async(
  dispatch,
  getState,
) => {
  const { itemsInBasket } = getState();

  const currentIndex = itemsInBasket.findIndex(
    element => element.id === phone.id
  );

  if (currentIndex < 0) {
    const requiredItem = { ...phone };

    requiredItem.quantity = 1;

    const itemsInBasketToDispatch = [...itemsInBasket, requiredItem];

    dispatch(addItemToBasket(itemsInBasketToDispatch));
    localStorage.setItem(
      'itemsFromBasketInLocal',
      JSON.stringify(itemsInBasketToDispatch)
    );
  }
};

export const increaseItemInBasketThunk = phoneId => async(
  dispatch,
  getState,
) => {
  const { itemsInBasket } = getState();

  const itemsInBasketToDispatch = [...itemsInBasket].map((phone) => {
    if (phone.id === phoneId) {
      // eslint-disable-next-line no-param-reassign
      phone.quantity += 1;
    }

    return phone;
  });

  dispatch(increaseItemInBasket(itemsInBasketToDispatch));
  localStorage.setItem(
    'itemsFromBasketInLocal',
    JSON.stringify(itemsInBasketToDispatch)
  );
};

export const decreaseItemInBasketThunk = phoneId => async(
  dispatch,
  getState,
) => {
  const { itemsInBasket } = getState();

  const itemsInBasketToDispatch = [...itemsInBasket].map((phone) => {
    if (phone.id === phoneId) {
      // eslint-disable-next-line no-param-reassign
      phone.quantity -= 1;
    }

    return phone;
  });

  dispatch(decreaseItemInBasket(itemsInBasketToDispatch));
  localStorage.setItem(
    'itemsFromBasketInLocal',
    JSON.stringify(itemsInBasketToDispatch)
  );
};

export const deleteItemFromBasketThunk = phoneId => async(
  dispatch,
  getState,
) => {
  const { itemsInBasket } = getState();

  const itemsInBasketToDispatch = [...itemsInBasket].filter(
    phone => phone.id !== phoneId
  );

  dispatch(deleteItemFromBasket(itemsInBasketToDispatch));
  localStorage.setItem(
    'itemsFromBasketInLocal',
    JSON.stringify(itemsInBasketToDispatch)
  );
};

export const clearBasketThunk = () => async(
  dispatch,
  getState,
) => {
  dispatch(clearBasket());
  localStorage.setItem(
    'itemsFromBasketInLocal',
    JSON.stringify([])
  );
};

export const getPhonesThunk = () => async(dispatch) => {
  dispatch(changeIsLoading(true));
  dispatch(changeIsLoaded(false));

  const responsePhones = await fetch(`${BASE_URL}/api/phones.json`);
  const phones = await responsePhones.json();

  dispatch(downloadPhones(phones));
  dispatch(changeIsLoading(false));
  dispatch(changeIsLoaded(true));
};

export const changeCurrentPage = page => ({
  type: CHANGE_CURRENT_PAGE,
  page,
});

// export const setQuantityOfPages = pages => ({
//   type: QUANTITY_PAGES,
//   pages,
// });
