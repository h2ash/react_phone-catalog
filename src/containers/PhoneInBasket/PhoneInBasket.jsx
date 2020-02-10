/* eslint-disable no-shadow */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { BASE_URL } from '../../lib/constants';
import {
  increaseItemInBasketThunk,
  decreaseItemInBasketThunk,
  deleteItemFromBasketThunk,
} from '../../redux/actions/actionsCreator';

const PhoneInBasket = ({
  item,
  increaseItemInBasketThunk,
  decreaseItemInBasketThunk,
  deleteItemFromBasketThunk,
}) => {
  const checkDisabledOrActive = classNames({
    'button--decrease-increase-disabled': item.quantity <= 1,
    'button--decrease-increase-active': item.quantity > 1,
  });

  return (
    <li
      className="basket-card"
      key={item.id}
    >
      <div className="basket-card__img-and-name-container">
        <div className="basket-card__img-container">
          <Link to={`/phones/${item.id}`}>
            <img
              className="basket-card__img"
              src={`${BASE_URL}/${item.imageUrl}`}
              alt={`${item.name} phone`}
            />
          </Link>
        </div>
        <h3>
          <Link
            className="link"
            to={`/phones/${item.id}`}
          >
            {item.name}
          </Link>
        </h3>
      </div>
      <div className="basket-card__buttons-container">
        <button
          onClick={() => decreaseItemInBasketThunk(item.id)}
          className={`
            button button--decrease-increase 
            ${checkDisabledOrActive}`}
          type="button"
        >
          -
        </button>
        <p className="basket-card__quantity-of-phone">{item.quantity}</p>
        <button
          onClick={() => increaseItemInBasketThunk(item.id)}
          className="
            basket-card__increase-button
            button
            button--decrease-increase
            button--decrease-increase-active"
          type="button"
        >
          +
        </button>
        <button
          onClick={() => deleteItemFromBasketThunk(item.id)}
          className="button button--remove"
          type="button"
        >
          x
        </button>
      </div>
    </li>
  );
};

PhoneInBasket.propTypes = {
  item: PropTypes.shape({
    age: PropTypes.number,
    id: PropTypes.string,
    imageURL: PropTypes.string,
    name: PropTypes.string,
    snippet: PropTypes.string,
  }).isRequired,
  increaseItemInBasketThunk: PropTypes.func.isRequired,
  decreaseItemInBasketThunk: PropTypes.func.isRequired,
  deleteItemFromBasketThunk: PropTypes.func.isRequired,
};

export default connect(({
  itemsInBasket,
}) => ({
  itemsInBasket,
}), {
  increaseItemInBasketThunk,
  decreaseItemInBasketThunk,
  deleteItemFromBasketThunk,
})(PhoneInBasket);