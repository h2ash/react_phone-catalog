/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import './styles/app.scss';
import {
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  phonesFromStorage,
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

const App = ({
  loadingStatus,
  loadedPhones,
  phonesFromStorage,
  getPhonesThunk,
}) => {
  useEffect(() => {
    const itemsFromBasketInLocal = JSON.parse(
      localStorage.getItem('itemsFromBasketInLocal')
    );

    if (itemsFromBasketInLocal !== null) {
      phonesFromStorage(itemsFromBasketInLocal);
    }
  }, [phonesFromStorage]);

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
              getPhonesThunk={getPhonesThunk}
              phones={loadedPhones}
              isLoading={loadingStatus.isLoading}
              isLoaded={loadingStatus.isLoaded}
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
        <Route
          path="/basket"
          render={() => (
            <Basket />
          )}
        />
        <Route path="/rights" exact render={() => <Rights />} />
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

export default connect(({
  loadingStatus,
  loadedPhones,
}) => ({
  loadingStatus,
  loadedPhones,
}), {
  phonesFromStorage,
  getPhonesThunk,
})(App);
