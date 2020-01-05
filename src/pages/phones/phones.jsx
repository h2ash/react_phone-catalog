/**
 * TODO: - pagination на Redux
 *    [x] создать reducer
 *    [x] создать actions
 *    [] - интегрировать в phones
 */

import React, { useState, useEffect } from 'react';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  changeCurrentPage,
  addItemToBasketThunk,
} from '../../redux/actions/actionsCreator';
import calcArrayOfPages from '../../helpers/calcArrayOfPages';
import sortArrayByValue from '../../helpers/sortArrayByValue';
import { BASE_URL } from '../../lib/constants';
import PaginationButtons from '../../components/Pagination/PaginationButtons';
import PaginationInfo from '../../components/Pagination/PaginationInfo';

const Phones = ({
  location,
  history,
  itemsInBasket,
  addItemToBasketThunk,
  phones,
}) => {
  const [sortedReceivedPhones, setSortedReceivedPhones] = useState(phones);
  const [phonesForShowing, setPhonesForShowing] = useState(phones);
  const [sortBy, setSortBy] = useState('age');
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [phonesPerPage, setPhonesPerPage] = useState(20);
  const [pages, setPages] = useState(1);
  const [arrOfPages, setArrOfPages] = useState([1]);
  const [
    firstIndexPhoneOnCurrentPage,
    setFirstIndexPhoneOnCurrentPage,
  ] = useState(1);
  const [
    lastPossibleIndexPhoneOnCurPage,
    setLastPossibleIndexPhoneOnCurPage,
  ] = useState((page * phonesPerPage) - 1);

  const params = new URLSearchParams(location.search);
  const queryFilter = params.get('filter');
  const querySort = params.get('sort');
  const queryCurpage = params.get('curpage');
  const queryPerpage = params.get('perpage');

  useEffect(() => {
    setSortedReceivedPhones(
      sortArrayByValue(phones, sortBy)
    );
  }, [sortBy, phones]);

  useEffect(() => {
    if (queryFilter !== null) {
      const phonesToSet = sortedReceivedPhones.filter(phone => phone.id
        .toLowerCase().includes(queryFilter.toLowerCase()));

      setPhonesForShowing(phonesToSet);
      setInputValue(queryFilter);
      setPages(Math.ceil(phonesToSet.length / phonesPerPage));
    } else {
      setPhonesForShowing(sortedReceivedPhones);
      setPages(Math.ceil(sortedReceivedPhones.length / phonesPerPage));
      setInputValue('');
      setPage(1);
    }
  }, [queryFilter, sortedReceivedPhones, phonesPerPage]);

  useEffect(() => {
    if (querySort !== null) {
      setPhonesForShowing(
        sortArrayByValue(phonesForShowing, querySort)
      );
      setSortBy(querySort, phonesForShowing);
    }
  }, [querySort, phonesForShowing]);

  useEffect(() => {
    if (queryPerpage !== null) {
      setPhonesPerPage(Number(queryPerpage));
      setPages(
        Math.ceil(phonesForShowing.length / Number(queryPerpage))
      );
    }
  }, [queryPerpage, phonesForShowing]);

  useEffect(() => {
    if (queryCurpage !== null) {
      setPage(Number(queryCurpage));
    }
  }, [queryCurpage]);

  useEffect(() => {
    setArrOfPages(calcArrayOfPages(pages));
  }, [pages]);

  useEffect(() => {
    const firstIndexToSet = page === 1
      ? 0 // index of FIRST phone from filtered phonesForShowing
      : (page - 1) * phonesPerPage;
    const lastIndexToSet = (page * phonesPerPage) - 1;

    setFirstIndexPhoneOnCurrentPage(firstIndexToSet);
    setLastPossibleIndexPhoneOnCurPage(lastIndexToSet);
  }, [page, phonesPerPage]);

  const filterHandleInput = (event) => {
    const { value } = event.target;

    setQueryParamsInURL('filter', value);
    setQueryParamsInURL('curpage', 1);
  };

  const sortHandleSelect = (event) => {
    const { value } = event.target;

    setQueryParamsInURL('sort', value);
    setQueryParamsInURL('curpage', 1);
  };

  const chooseQuantityOfPhonesPerPage = (event) => {
    const { value } = event.target;

    setQueryParamsInURL('perpage', value);
    setQueryParamsInURL('curpage', 1);
  };

  const choosePage = (value) => {
    setQueryParamsInURL('curpage', value);
  };

  const setQueryParamsInURL = (paramsName, valueToSet) => {
    params.set(paramsName, valueToSet);

    history.push({
      pathname: '/phones',
      search: `?${params.toString()}`,
    });
  };

  return (
    <div className="phones-page">
      <h1 className="heading heading--l phones-page__quantity-phones">
        Phones Quantity:
        {phonesForShowing.length}
      </h1>

      <div className="phones-page__input-and-select-container">

        <input
          className="phones-page__filter"
          placeholder="Filter phones by name"
          value={inputValue}
          onChange={filterHandleInput}
          id="search_field"
          type="text"
        />

        <select
          className="phones-page__sort"
          value={sortBy}
          id="sort"
          onChange={sortHandleSelect}
        >
          <option value="age">Newest</option>
          <option value="name">Alphabetical</option>
        </select>

        <select
          className="phones-page__perpage"
          value={phonesPerPage}
          onChange={chooseQuantityOfPhonesPerPage}
          id="chooseQuantityOfPhonesPerPage"
        >
          <option value="20">Per Page: 20</option>
          <option value="10">Per Page: 10</option>
          <option value="5">Per Page: 5</option>
          <option value="3">Per Page: 3</option>
        </select>
      </div>

      <ul
        className="phones-page__list-of-phones" // временный
      >
        {
          phonesForShowing
            .filter((phone, index) => index >= firstIndexPhoneOnCurrentPage
              && index <= lastPossibleIndexPhoneOnCurPage)
            .map(phone => (
              <li
                key={phone.id}
                className="phone-card" // временный
              >
                <div>
                  <Link to={`/phones/${phone.id}`}>
                    <img
                      className="phone-card__img" // временный
                      src={`${BASE_URL}/${phone.imageUrl}`}
                      alt={`${phone.id}`}
                    />
                  </Link>

                  <Link
                    className="phone-card__heading link link--phone-heading"
                    to={`/phones/${phone.id}`}
                  >
                    {phone.name}
                  </Link>

                  <section className="phone-card__snippet">
                    {phone.snippet}
                  </section>
                </div>

                <button
                  type="button"
                  className={
                    `phone-card__button button button--add-in-basket
                    ${itemsInBasket
                .find(item => item.id === phone.id)
                    && 'button--add-in-basket_added'}`
                  }
                  onClick={() => addItemToBasketThunk(phone)}
                >
                  {itemsInBasket.find(item => item.id === phone.id)
                    ? 'Added to basket'
                    : 'Add to basket'}
                </button>
              </li>
            ))
        }
      </ul>

      {
        pages > 1
          ? (
            <div className="phones-page__pagination-container pagination">
              <PaginationInfo
                page={page}
                pages={pages}
                phonesPerPage={phonesPerPage}
                phonesForShowing={phonesForShowing}
              />

              <PaginationButtons
                choosePage={choosePage}
                page={page}
                pages={pages}
                arrOfPages={arrOfPages}
              />
            </div>
          )
          : ''
      }
    </div>
  );
};

Phones.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
  phones: PropTypes.arrayOf(PropTypes.shape({
    age: PropTypes.number,
    id: PropTypes.string,
    imageURL: PropTypes.string,
    name: PropTypes.string,
    snippet: PropTypes.string,
  })).isRequired,
  addItemToBasketThunk: PropTypes.func.isRequired,
  itemsInBasket: PropTypes.arrayOf(PropTypes.shape({
    age: PropTypes.number,
    id: PropTypes.string,
    imageURL: PropTypes.string,
    name: PropTypes.string,
    snippet: PropTypes.string,
  })).isRequired,
};

export default connect(({
  pagination,
  itemsInBasket,
}) => ({
  pagination,
  itemsInBasket,
}), ({
  changeCurrentPage,
  addItemToBasketThunk,
}))(Phones);
