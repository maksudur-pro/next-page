import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
  const { books } = useLoaderData();
  return (
    <div className="my-container">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 mb-8">
        {books.map((book) => (
          <Book book={book} key={book.isbn13}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
