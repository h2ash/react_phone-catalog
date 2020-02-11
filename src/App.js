/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles/app.scss';
import {
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { PHONES_FROM_STORAGE } from './lib/constants';
import {
  getPhonesThunk,
} from './redux/actions/actionsCreator';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import LoaderOfPhones from './containers/Phones/LoaderOfPhones';
import Page404 from './components/Page404/Page404';
import LoaderForPhone from './containers/Phone/LoaderForPhone';
import Basket from './containers/Basket/Basket';
import Footer from './components/Footer/Footer';
import Rights from './components/Rights/Rights';

const App = () => {
  const dispatch = useDispatch();
  const loadedPhones = useSelector(state => state.loadedPhones);

  useEffect(() => {
    const itemsFromBasketInLocal = JSON.parse(
      localStorage.getItem('itemsFromBasketInLocal')
    );

    if (itemsFromBasketInLocal !== null) {
      dispatch({ type: PHONES_FROM_STORAGE, payload: itemsFromBasketInLocal });
    }
  }, []);

  return (
    <div className="app">
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/phones"
          exact
          render={({ location, history }) => (
            <LoaderOfPhones
              location={location}
              history={history}
            />
          )}
        />
        <Route
          path="/phones/:id?"
          render={({ match }) => (
            <LoaderForPhone
              id={match.params.id}
              phones={loadedPhones}
              getPhonesThunk={getPhonesThunk}
            />
          )}
        />
        <Route path="/basket" component={Basket} />
        <Route path="/rights" exact component={Rights} />
        <Route component={Page404} />
      </Switch>

      <Footer />
    </div>
  );
};

App.propTypes = {
  phonesFromStorage: PropTypes.func.isRequired,
  getPhonesThunk: PropTypes.func.isRequired,
  loadedPhones: PropTypes.arrayOf(PropTypes.shape({
    age: PropTypes.number,
    id: PropTypes.string,
    imageURL: PropTypes.string,
    name: PropTypes.string,
    snippet: PropTypes.string,
  })).isRequired,
  loadingStatus: PropTypes.shape({
    isLoading: PropTypes.bool,
    isLoaded: PropTypes.bool,
  }).isRequired,
};

export default App;
