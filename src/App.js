/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './styles/app.scss';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { PHONES_FROM_STORAGE } from './lib/constants';
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

  useEffect(() => {
    const itemsFromBasketInLocal = JSON.parse(
      localStorage.getItem('itemsFromBasketInLocal')
    );

    if (itemsFromBasketInLocal !== null) {
      dispatch({ type: PHONES_FROM_STORAGE, payload: itemsFromBasketInLocal });
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/phones" exact><LoaderOfPhones /></Route>
        <Route path="/phones/:id?"><LoaderForPhone /></Route>
        <Route path="/basket" component={Basket} />
        <Route path="/rights" exact component={Rights} />
        <Route component={Page404} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
