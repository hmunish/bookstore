import { useSelector } from 'react-redux';
import BookCard from './BookCard';

const BookList = () => {
  const booksDetails = useSelector((state) => state.books.value);
  return (
    <section className="book-list">
      <ul>
        {booksDetails.map((book) => (
          <BookCard key={book.item_id} book={book} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
