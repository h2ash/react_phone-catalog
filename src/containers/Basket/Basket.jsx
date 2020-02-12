/* eslint-disable no-shadow */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearBasketThunk } from '../../redux/actions/actionsCreator';
import PhoneInBasket from '../PhoneInBasket/PhoneInBasket';

const Basket = () => {
  const dispatch = useDispatch();
  const itemsInBasket = useSelector(state => state.itemsInBasket);

  return (
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
                  onClick={() => dispatch(clearBasketThunk())}
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
};

export default Basket;
