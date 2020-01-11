import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import Phones from './Phones';

const LoaderOfPhones = ({
  phones,
  isLoading,
  isLoaded,
  location,
  history,
  getPhonesThunk,
}) => {
  useEffect(() => {
    getPhonesThunk();
  }, [getPhonesThunk]);

  return (
    <main className="wrapper__main">
      {
        isLoaded
          ? (
            <Phones
              phones={phones}
              location={location}
              history={history}

            />
          )
          : (
            <Loader
              isLoading={isLoading}
            />
          )
      }
    </main>
  );
};

LoaderOfPhones.propTypes = {
  getPhonesThunk: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  phones: PropTypes.arrayOf(PropTypes.shape({
    age: PropTypes.number,
    id: PropTypes.string,
    imageURL: PropTypes.string,
    name: PropTypes.string,
    snippet: PropTypes.string,
  })).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default LoaderOfPhones;
