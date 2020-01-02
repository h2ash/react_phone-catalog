import {
  CHANGE_CURRENT_PAGE,
  CALC_QUANTITY_PAGES_AND_THEIR_ARR,
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

    case CALC_QUANTITY_PAGES_AND_THEIR_ARR:
    {
      const totalPages = Math.ceil(action.phonesForShowing
        / action.phonesPerPage);

      const resultingArrayOfPages = [];

      // eslint-disable-next-line no-plusplus
      for (let index = 1; index <= totalPages; index++) {
        resultingArrayOfPages.push(index);
      }

      return {
        ...state,
        pages: totalPages,
        arrOfPages: [...resultingArrayOfPages],
      };
    }

    default:
      return state;
  }
};
