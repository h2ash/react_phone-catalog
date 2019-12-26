import { SWITCH_IS_LOADED, SWITCH_IS_LOADING } from '../../lib/constants';

const defaultState = {
  isLoading: false,
  isLoaded: false,
};

export const loadingStatus = (state = defaultState, action) => {
  switch (action.type) {
    case SWITCH_IS_LOADING:
      // eslint-disable-next-line object-curly-newline
      return { ...state, isLoading: action.valueIsLoading };
    case SWITCH_IS_LOADED:
      return { ...state, isLoaded: action.valueIsLoaded };
    default:
      return state;
  }
};
