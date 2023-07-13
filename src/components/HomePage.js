/*eslint-disable */
import BookList from "./BookList";
import AddBook from "./AddBook";

const HomePage = () => (
  <section className="books-section">
    <BookList />
    <AddBook />
  </section>
);

export default HomePage;
