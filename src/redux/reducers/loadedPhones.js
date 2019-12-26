import { DOWNLOAD_PHONES } from '../../lib/constants';

export const loadedPhones = (state = [], action) => {
  switch (action.type) {
    case DOWNLOAD_PHONES:
      return [...action.phones];
    default:
      return state;
  }
};
