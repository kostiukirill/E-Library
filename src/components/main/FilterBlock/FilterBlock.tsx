import React, { useCallback } from "react";
import { forGenres, forSorting } from "../../../utils/forSortedBlockData";
import { ActionType } from "../../../types/actionType";
import { getBooks } from "../../../utils/getBooks/getBooks";
import { FilterBlockPropsType } from "../../../types/FilterBlockPropsType";
import "./FilterBlock.css";

const FilterBlock: React.FC<FilterBlockPropsType> = ({ store }) => {
  const changeSelectGenres = useCallback(
    (selectGenres: string): ActionType => ({
      type: "CHANGE_SELECT_GENRES_VALUE",
      selectGenres: selectGenres,
    }),
    []
  );
  const changeSelectSort = useCallback(
    (selectSort: string): ActionType => ({
      type: "CHANGE_SELECT_SORT_VALUE",
      selectSort: selectSort,
    }),
    []
  );
  const selectGenres = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      store.dispatch(changeSelectGenres(e.target.value));
      getBooks({ type: "CREATE_BOOKS" });
    },
    [changeSelectGenres, store]
  );
  const selectSort = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      store.dispatch(changeSelectSort(e.target.value));
      getBooks({ type: "CREATE_BOOKS" });
    },
    [changeSelectSort, store]
  );

  return (
    <div className="filter-block_wrapper">
      <div className="filter-block_select-wrapper">
        <span className="filter-block_select-label">Categoties</span>
        <select
          className="filter-block_select"
          id="genres-filter"
          onChange={(e) => {
            selectGenres(e);
          }}
        >
          {forGenres.map((genre, index) => (
            <option key={index}>{genre}</option>
          ))}
          ;
        </select>
      </div>
      <div className="filter-block_select-wrapper">
        <span className="filter-block_select-label">Sorting by</span>
        <select
          className="filter-block_select"
          id="sorted-block"
          onChange={(e) => {
            selectSort(e);
          }}
        >
          {forSorting.map((sorted, index) => (
            <option key={index}>{sorted}</option>
          ))};
        </select>
      </div>
    </div>
  );
};

export default FilterBlock;
