import React, { useCallback } from "react";
import { connect } from "react-redux";
import { stateReducer } from "../../../../store/reducer";
import "./BookCard.css";
import { BookCardPropsType } from "../../../../types/BookCardPropsType";



const BookCard: React.FC<BookCardPropsType> = ({
  id,
  title,
  authors,
  categories,
  imageLinks,
  handleNavigate,
}) => {
  const handleNavigateClick = useCallback(() => {
    handleNavigate(id);
  }, [handleNavigate, id]);
  return (
    <div onClick={handleNavigateClick} className="book-card">
      <img
        className="book-card_img"
        src={
          imageLinks?.thumbnail ||
          "https://junior3d.ru/texture/Бумага/ОбложкиСтарыхКниг/обложки-старых-книг_135.jpg"
        }
        alt=""
      />
      <h3 className="book-card_title">{title}</h3>
      <dt>Authors</dt>
      <dd className="book-card_authors">{authors}</dd>
      <dt>Category</dt>
      <dd className="book-card_categories">
        {categories ? categories[0] : undefined}
      </dd>
    </div>
  );
};

export default connect(stateReducer)(BookCard);
