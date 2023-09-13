import React, { useCallback } from "react";
import SearchForm from "./searchForm/searchForm";
import BookShowCase from "./BookShowCase/BookShowCase";
import FilterBlock from "./FilterBlock/FilterBlock";
import { store } from "../../store/store";
import { useNavigate } from "react-router-dom";
import "./main.css";

const Main: React.FC = () => {
  const navigate = useNavigate();
  const toNavigate = useCallback(
    (id: string) => {
      navigate(`/${id}`);
    },
    [navigate]
  );
  return (
    <section className="main">
      <div className="main_title_wrapper">
        <h1 className="main_title">SEARCH FOR BOOKS</h1>
      </div>
      <SearchForm store={store} />
      <FilterBlock store={store} />
      <BookShowCase
        handleNavigate={toNavigate}
        store={store}
        type={"CHANGE_SEARCH_INPUT_VALUE"}
      />
    </section>
  );
};

export default Main;
