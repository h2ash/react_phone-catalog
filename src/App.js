import React from 'react';
import './styles/app.scss';
import {
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  changeIsLoading,
  changeIsLoaded,
  // phonesFromStorage,
  getPhonesThunk,
} from './redux/actions/actionsCreator';
import Navbar from './components/Navbar/Navbar';
import Index from './pages/index';
import LoaderOfPhones from './pages/phones/loaderOfPhones';
import Page404 from './pages/Page404/Page404';
import LoaderForPhone from './pages/phone/loaderForPhone';
import Basket from './pages/basket/basket';
import Footer from './components/Footer/Footer';
import Rights from './pages/rights/rights';

class App extends React.Component {
  componentDidMount() {
    const itemsFromBasketInLocal = JSON.parse(
      localStorage.getItem('itemsFromBasketInLocal')
    );

    if (itemsFromBasketInLocal !== null) {
      
      // this.props.phonesFromStorage(itemsFromBasketInLocal); 
      // this.setState({
      //   itemsInBasket: itemsFromBasketInLocal,
      // });
    }
  }

  loadDataPhones = async() => {
    this.props.getPhonesThunk();
  };

  render() {
    const {
      loadingStatus,
      loadedPhones,
    } = this.props;

    return (
      <div className="app">
        <Navbar />

        <Switch>
          <Route path="/" exact component={Index} />
          <Route
            path="/phones"
            exact
            render={({ location, history }) => (
              <LoaderOfPhones
                loadDataPhones={this.loadDataPhones}
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
                loadDataPhones={this.loadDataPhones}
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
  }
}

App.propTypes = {
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
  changeIsLoading,
  changeIsLoaded,
  // phonesFromStorage,
  getPhonesThunk,
})(App);
