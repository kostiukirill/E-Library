import React, { useCallback, useRef } from "react";
import { getBooks } from "../../../utils/getBooks/getBooks";
import { ActionType } from "../../../types/actionType";
import { SearchFormPropsType } from "../../../types/SearchFormPropsType";
import Button from "../../ui/button/Button";
import "./searchForm.css";

const SearchForm: React.FC<SearchFormPropsType> = ({ store }) => {
  const changeSearchInputValue = useCallback(
    (searchInputValue: string): ActionType => ({
      type: "CHANGE_SEARCH_INPUT_VALUE",
      searchInputValue: searchInputValue,
    }),
    []
  );

  const _searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmitSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (_searchInputRef.current?.value) {
        store.dispatch(changeSearchInputValue(_searchInputRef.current.value));
        getBooks({ type: "CREATE_BOOKS" });
        console.log(store.getState());
        _searchInputRef.current.value = "";
      }
    },
    [changeSearchInputValue, store]
  );
  return (
    <div className="search-form_wrapper">
      <form className="search-form" action="" onSubmit={handleSubmitSearch}>
        <input
          ref={_searchInputRef}
          type="text"
          placeholder="Please, input book's name or keywords"
          className="search-form_input"
        />
        <Button className="search-form_button" handleClick={handleSubmitSearch} svg={
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z" fill="#000000"/>
          </svg>
        }/>
      </form>
    </div>
  );
};

export default SearchForm;
