import {
  CHANGE_CURRENT_PAGE,
  SET_QUANTITY_PAGES,
  CALC_ARRAY_FOR_PAGES,
} from '../../lib/constants';

const defaultState = {
  currentPage: 1,
  pages: 1,
  arrOfPages: [1],
};

export const pagination = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE:
      return {
        ...state, currentPage: action.page,
      };

    case SET_QUANTITY_PAGES:
    {
      return {
        ...state,
        pages: action.pages,
        arrOfPages: action.arr,
      };
    }

    default:
      return state;
  }
};
