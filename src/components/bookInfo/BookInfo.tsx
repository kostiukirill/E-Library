import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookDataType } from "../../types/statePropsType";
import './BookInfo.css'
import Button from "../ui/button/Button";

const BookInfo = (): React.ReactElement => {
  const { id } = useParams();
  const bookInfoState = JSON.parse(
    localStorage.getItem("bookInfoState") || "{}"
  );
  const index = bookInfoState.stateReducer?.books?.findIndex(
    (book: BookDataType) => book.id === id
  );

  const navigate = useNavigate();
  const toNavigate = useCallback(
    () => {
      navigate(`/`);
    },
    [navigate]
  );
  return (
    <div className="bookInfo-wrapper">
      <h1 className="bookInfo-wrapper_title">Book information</h1>
      <Button className="bookInfo_button-backup" value="<<< Backup" handleClick={toNavigate}/>
      <div className="bookInfo_block-generic">
          <img
            className="bookInfo_img"
            src={bookInfoState.stateReducer.books[index].imageLinks?.thumbnail || "https://junior3d.ru/texture/Бумага/ОбложкиСтарыхКниг/обложки-старых-книг_135.jpg"}
            alt=""
          />
          <div className="bookInfo-block-avantiule">
              <h2 className="bookInfo_title">{bookInfoState.stateReducer.books[index].title}</h2>
              <dt>Categories</dt>
              {bookInfoState.stateReducer.books[index].categories?.map(
                (category: string, index: number) => {
                  return <dd className="bookInfo_category" key={index}>{category}</dd>;
                }
              )}
              <dt>Authors</dt>
              {bookInfoState.stateReducer.books[index].authors?.map(
                (author: string, index: number) => {
                  return <dd className="bookInfo_author" key={index}>{author}</dd>;
                }
              )}
              <dt>Publish date</dt>
              <dd className="bookInfo_publish-date">{bookInfoState.stateReducer.books[index].publishedDate}</dd>
          </div>
      </div>
      <dt className="bookInfo_description_termin">Description</dt>
      <dd className="bookInfo_description">{bookInfoState.stateReducer.books[index].description}</dd>
    </div>
  );
};

export default BookInfo;
