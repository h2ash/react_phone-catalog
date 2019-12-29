/* eslint-disable no-shadow */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearBasket } from '../../redux/actions/actionsCreator';
import PhoneInBasket from '../../components/PhoneInBasket/PhoneInBasket';

const Basket = ({
  itemsInBasket,
  clearBasket,
}) => (
  <main className="wrapper__main basket">
    <h2 className="heading heading--m basket__quantity-of-phones">
      Chosen phones:
      {itemsInBasket.length}
    </h2>
    {
      itemsInBasket.length
        ? (
          <>
            <ul className="basket__phones-list">
              {
                itemsInBasket.map(item => (
                  <PhoneInBasket
                    key={item.id}
                    item={item}
                  />
                ))
              }
            </ul>
            <div className="basket__buttons">
              <button
                onClick={() => clearBasket()}
                className="button button--delete-items"
                type="button"
              >
                  Delete all items from basket
              </button>
              <Link
                className="link link--back-to-catalog"
                to="/phones"
              >
                Back to catalog
              </Link>
            </div>
          </>
        )
        : (
          <>
            <Link
              className="link link--back-to-catalog"
              to="/phones"
            >
              Back to catalog
            </Link>
          </>
        )
    }
  </main>
);

Basket.propTypes = {
  itemsInBasket: PropTypes.arrayOf(PropTypes.shape({
    age: PropTypes.number,
    id: PropTypes.string,
    imageURL: PropTypes.string,
    name: PropTypes.string,
    snippet: PropTypes.string,
  })).isRequired,
  clearBasket: PropTypes.func.isRequired,
};

export default connect(({
  itemsInBasket,
}) => ({
  itemsInBasket,
}), ({
  clearBasket,
}))(Basket);
