import { useState } from 'react';
import BookCard from './BookCard';

const BookList = () => {
  const [booksDetails] = useState([
    {
      category: 'Action',
      bookName: 'The Hunger Games',
      author: 'Suzanne Collins',
      completed: 50,
    },
    {
      category: 'Science Fiction',
      bookName: 'Dune',
      author: 'Frank Herbert',
      completed: 8,
    },
  ]);
  return (
    <section className="book-list">
      <ul>
        {booksDetails.map((book) => (
          <BookCard key={book.bookName} book={book} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
