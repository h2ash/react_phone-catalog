import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPhonesThunk,
} from '../../redux/actions/actionsCreator';
import Loader from '../../components/Loader/Loader';
import Phones from './Phones';

const LoaderOfPhones = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(state => state.loadingStatus);

  useEffect(() => {
    dispatch(getPhonesThunk());
  }, [dispatch]);

  return (
    <main className="wrapper__main">
      {
        loadingStatus.isLoaded
          ? (
            <Phones />
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

export default LoaderOfPhones;
