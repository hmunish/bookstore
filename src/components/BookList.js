/*eslint-disable */
import BookCard from "./BookCard";

const BookList = () => {
  const booksDetails = [
    {
      category: "Action",
      bookName: "The Hunger Games",
      author: "Suzanne Collins",
      completed: 50,
    },
    {
      category: "Science Fiction",
      bookName: "Dune",
      author: "Frank Herbert",
      completed: 8,
    },
  ];
  return (
    <section className="book-list">
      {booksDetails.map((book) => (
        <BookCard book={book} />
      ))}
    </section>
  );
};

export default BookList;
