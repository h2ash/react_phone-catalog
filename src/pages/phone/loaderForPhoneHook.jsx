import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import Phone from './phone';
import { BASE_URL } from '../../lib/constants';
import NoSuchPhone from '../NoSuchPhone/NoSuchPhone';

const LoaderForPhoneHook = ({ getPhonesThunk, id, phones }) => {
  const [detailsOfCurrentPhone, setDetailsOfCurrentPhone] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getPhonesThunk();
    loadDataDetails(id);
  }, [getPhonesThunk]);

  const loadDataDetails = async(currentId) => {
    setIsLoading(true);

    try {
      const responseDetails = await
      fetch(`${BASE_URL}/api/phones/${currentId}.json`);
      const fetchedDetailsOfCurrentPhone = await responseDetails.json();

      setDetailsOfCurrentPhone(fetchedDetailsOfCurrentPhone);
      setIsLoading(false);
      setIsLoaded(true);
    } catch {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <main className="wrapper__main">
        <Loader
          isLoading={isLoading}
        />
      </main>
    );
  }

  if (isLoaded) {
    return (
      <main className="wrapper__main">
        {
          id === detailsOfCurrentPhone.id
            ? (
              <>
                {
                  phones
                    .filter(phone => phone.id === id)
                    .map(phone => (
                      <Phone
                        id={id}
                        phone={phone}
                        key={phone.id}
                        detailsOfCurrentPhone={detailsOfCurrentPhone}
                      />
                    ))
                }
              </>
            )
            : <NoSuchPhone />
        }
      </main>
    );
  }

  return (
    <main className="wrapper__main">
      <NoSuchPhone />
    </main>
  );
};

LoaderForPhoneHook.propTypes = {
  id: PropTypes.string.isRequired,
  phones: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPhonesThunk: PropTypes.func.isRequired,
};

export default LoaderForPhoneHook;
