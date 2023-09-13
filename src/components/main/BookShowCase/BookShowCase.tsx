import React from "react";
import BookCard from "./BookCard/BookCard";
import Loader from "../../ui/loader/Loader";
import { connect } from "react-redux";
import { stateReducer } from "../../../store/reducer";
import { getBooks } from "../../../utils/getBooks/getBooks";
import type { BookDataType } from "../../../types/statePropsType";
import type { BookShowCasePropsType } from "../../../types/BookShowCasePropsType";
import Button from "../../ui/button/Button";
import "./BookShowCase.css";

const BookShowCase: React.FC<BookShowCasePropsType> = ({
  store,
  handleNavigate,
}) => {
  const loadMore = () => {
    getBooks(
      { type: "ADD_BOOKS" },
      store.getState().stateReducer.books?.length
    );
  };
  const bookShowCaseData = JSON.parse(
    localStorage.getItem("bookInfoState") || "{}"
  );
  return (
    <section>
      {bookShowCaseData.stateReducer?.loaded === false &&
      bookShowCaseData.stateReducer?.loading === false ? null : bookShowCaseData
          .stateReducer?.loaded === false &&
        bookShowCaseData.stateReducer?.loading === true ? (
        <Loader />
      ) : (
        <div className="bookshowcase-block">
          <div className="bookshowcase-block_book-counter">
            {`By request '${bookShowCaseData.stateReducer?.searchInputValue}' ${bookShowCaseData.stateReducer?.books?.length} books were displayed`}
          </div>
          <div className="bookshowcase-block-wrapper">
            {bookShowCaseData.stateReducer?.error === ''
            ? bookShowCaseData.stateReducer?.books.map(
              (book: BookDataType, index: number) => {
                return (
                  <BookCard
                    handleNavigate={handleNavigate}
                    key={index}
                    title={book.title}
                    authors={book.authors}
                    categories={book.categories}
                    imageLinks={book.imageLinks}
                    id={book.id}
                    description={book.description}
                    publishedDate={book.publishedDate}
                    type={"CREATE_BOOKS"}
                  />
                );
              }
            )
          : bookShowCaseData.stateReducer?.error}
          </div>
          <Button className="bookshowcase_button-loadmore" value="Load More" handleClick={loadMore}/>
        </div>
      )}
    </section>
  );
};

export default connect(stateReducer)(BookShowCase);
