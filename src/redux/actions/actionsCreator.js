import { BASE_URL } from '../../lib/constants';

export const changeIsLoading = valueIsLoading => ({
  type: 'SWITCH_IS_LOADING',
  valueIsLoading,
});

export const changeIsLoaded = valueIsLoaded => ({
  type: 'SWITCH_IS_LOADED',
  valueIsLoaded,
});

export const downloadPhones = phones => ({
  type: 'DOWNLOAD_PHONES',
  phones,
});

export const getPhonesThunk = () => async(dispatch) => {
  const responsePhones = await fetch(`${BASE_URL}/api/phones.json`);
  const phones = await responsePhones.json();

  dispatch(downloadPhones(phones));
  dispatch(changeIsLoading(false));
  dispatch(changeIsLoaded(true));
};
