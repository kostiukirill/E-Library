import React from "react";
import Main from "../../main/main";
import BookInfo from "../../bookInfo/BookInfo";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const AppRouter = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:id" element={<BookInfo />} />
    </Routes>
  );
};

export default AppRouter;
