import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookCard from './BookCard';
import { fetchBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const booksDetails = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <section className="book-list">
      {booksDetails.loading && <div>Loading</div>}
      {booksDetails.loading && booksDetails.error ? (
        <div>{booksDetails.error}</div>
      ) : null}
      {!booksDetails.loading && Object.keys(booksDetails.value) ? (
        <ul>
          {Object.keys(booksDetails.value).map((key) => {
            const bookData = { ...booksDetails.value[key][0] };
            bookData.item_id = key;
            return <BookCard key={key} book={bookData} />;
          })}
        </ul>
      ) : null}
    </section>
  );
};

export default BookList;
