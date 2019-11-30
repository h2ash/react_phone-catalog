import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { BASE_URL } from '../components/constants';
import PaginationButtons from '../components/PaginationButtons';
import PaginationInfo from '../components/PaginationInfo';
import PropTypes from 'prop-types';

class PageOfPhones extends React.Component {
  state = {
    phonesForShowing: [],
    sortBy: "age",
    inputValue: "",
    page: 1,
    phonesPerPage: 20,
    pages: 1,
    arrOfPages: [1],
  }

  componentDidMount = () => {
    let params = new URLSearchParams(this.props.location.search);

    if (params.get("curpage")) {
      this.setState({
        page: params.get("curpage"),
      });
    }

    if (params.get("perpage")) {
      this.setState({
        phonesPerPage: Number(params.get("perpage")),
      });
    }

    if (params.get("filter")) {
      this.setState(prevState => ({
        phonesForShowing: [...this.props.phones]
          .filter(phone => phone.id
            .toLowerCase().includes(params.get("filter").toLowerCase())),
        inputValue: params.get("filter"), // text in input
      }));

      if (params.get("sort")) {
        this.sortFunctionByValue(params.get("sort"));
      }
    } else {
      this.setState({
        phonesForShowing: this.props.phones,
      });

      if (params.get("sort")) {
        this.sortFunctionByValue(params.get("sort"));
      }
    }

    this.calcQuantityAndArrOfPages();
  };

  filterHandleInput = (event) => {
    const { value } = event.target;

    this.setState({
      inputValue: value, // showing in input,
      phonesForShowing: this.props.phones
        .filter(phone =>
          phone.id.toLowerCase().includes(value.toLowerCase())),
    });

    // this.sortFunc(this.state.sortBy);
    this.sortFunctionByValue(this.state.sortBy);
    this.calcQuantityAndArrOfPages();
    this.choosePage(1);
    this.setQueryParamsInURL("filter", value);
  };

  sortHandleSelect = (event) => {
    const { value } = event.target;

    this.sortFunctionByValue(value);
    this.choosePage(1);
    this.setQueryParamsInURL("sort", value);
  };

  sortFunctionByValue = (value) => {
    this.setState(prevState => ({
      sortBy: value,
      phonesForShowing: [...prevState.phonesForShowing].sort((a, b) => {
        const valueA = a[value];
        const valueB = b[value];

        switch (value) {
          case "age":
            return valueA - valueB;
          case "name":
            return valueA.localeCompare(valueB);
          default:
            return 0;
        }
      }),
    }));
  };

  setQueryParamsInURL = (paramsName, valueToSet) => {
    let params = new URLSearchParams(this.props.location.search);
    params.set(paramsName, valueToSet);

    this.props.history.push({
      pathname: "/phones",
      search: `?${params.toString()}`,
    })

  };

  // 3 functions below are for the Pagination
  chooseQuantityOfPhonesPerPage = (event) => {
    const { value } = event.target;
    
    this.setState({
      phonesPerPage: Number(value),
    });

    this.calcQuantityAndArrOfPages();
    this.choosePage(1);
    this.setQueryParamsInURL("perpage", value);
  };

  choosePage = (value) => {
    this.setState({
      page: value,
    });

    this.setQueryParamsInURL("curpage", value);
  };

  calcQuantityAndArrOfPages = () => {
    this.setState(prevState => ({
      pages: Math.ceil(prevState.phonesForShowing.length / prevState.phonesPerPage),
    }));

    this.setState(prevState => {
      const arr = [];
      for (let i = 1; i <= prevState.pages; i++) {
        arr.push(i);
      };
      return {
        arrOfPages: arr,
      }
    })
  };

  render() {
    const {
      phonesForShowing,
      phonesPerPage,
      page,
      pages,
      arrOfPages,
      inputValue,
      sortBy,
    } = this.state;    
    
    const firstIndexPhoneOnCurrentPage = page === 1
      ? 0 // index of FIRST phone from filtered phonesForShowing
      : (page - 1) * phonesPerPage;
    const lastPossibleIndexPhoneOnCurPage = (page * phonesPerPage) - 1;

    return (
      <div>
        <div>Phones quantity: {phonesForShowing.length}</div>

        <PaginationButtons
          choosePage={this.choosePage}
          page={page}
          arrOfPages={arrOfPages}
        />

        <div>Current Page: {page}</div>

        <PaginationInfo 
          page={page}
          pages={pages}
          phonesPerPage={phonesPerPage}
          phonesForShowing={phonesForShowing}
        />

        <label htmlFor="chooseQuantityOfPhonesPerPage">
          <select
            value={this.state.phonesPerPage}
            onChange={this.chooseQuantityOfPhonesPerPage}
            id="chooseQuantityOfPhonesPerPage"
          >
            <option value='20'>Per Page: 20</option>
            <option value='10'>Per Page: 10</option>
            <option value='5'>Per Page: 5</option>
            <option value='3'>Per Page: 3</option>
          </select>
        </label>

        <label
          htmlFor="search_field"
        >
          Search:
          <input
            value={inputValue}
            onChange={this.filterHandleInput}
            id="search_field"
            type="text"
          />
        </label>

        <label
          htmlFor="sort_select"
        >
          Sort by:
          <select
            value={sortBy}
            id="sort"
            onChange={this.sortHandleSelect}
          >
            <option value="age">Newest</option>
            <option value="name">Alphabetical</option>
          </select>
        </label>

        <ul
          className="ulForCards" // временный
        >
          {
            phonesForShowing
              .filter((phone, index) => index >= firstIndexPhoneOnCurrentPage
                && index <= lastPossibleIndexPhoneOnCurPage)
              .map(phone => (
                <li
                  key={phone.id}
                  className="card" // временный
                >
                  <img
                    className="card__img" // временный
                    src={`${BASE_URL}/${phone.imageUrl}`}
                    alt="altImg"
                  />

                  <Link
                    to={`/phones/${phone.id}`}
                  >
                    {phone.name}
                  </Link>

                  <section>
                    {phone.snippet}
                  </section>

                  <button
                    onClick={() => this.props.addItemToBasket(phone)}
                  >
                    Add to cart
                  </button>
                </li>
              ))
          }
        </ul>
      </div>
    );
  }
}

PageOfPhones.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.object).isRequired,
  addItemToBasket: PropTypes.func.isRequired,
};

export default PageOfPhones;
