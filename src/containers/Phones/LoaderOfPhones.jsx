import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getPhonesThunk,
} from '../../redux/actions/actionsCreator';
import Loader from '../../components/Loader/Loader';
import Phones from './Phones';

const LoaderOfPhones = ({
  location,
  history,
}) => {
  const dispatch = useDispatch();
  const phones = useSelector(state => state.loadedPhones);
  const loadingStatus = useSelector(state => state.loadingStatus);

  useEffect(() => {
    dispatch(getPhonesThunk());
  }, [dispatch]);

  return (
    <main className="wrapper__main">
      {
        loadingStatus.isLoaded
          ? (
            <Phones
              phones={phones}
              location={location}
              history={history}
            />
          )
          : (
            <Loader
              isLoading={loadingStatus.isLoading}
            />
          )
      }
    </main>
  );
};

LoaderOfPhones.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default LoaderOfPhones;
