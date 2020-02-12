import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import Phone from './Phone';
import { BASE_URL } from '../../lib/constants';
import NoSuchPhone from '../../components/NoSuchPhone/NoSuchPhone';
import { getPhonesThunk } from '../../redux/actions/actionsCreator';

const LoaderForPhone = ({ id }) => {
  const dispatch = useDispatch();
  const phones = useSelector(state => state.loadedPhones);
  const [detailsOfCurrentPhone, setDetailsOfCurrentPhone] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    dispatch(getPhonesThunk());
    loadDataDetails(id);
  }, [dispatch, id]);

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

LoaderForPhone.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LoaderForPhone;
