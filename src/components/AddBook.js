import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: e.target.bookName.value,
      author: e.target.bookAuthor.value,
      category: 'Nonfiction',
    };
    dispatch(addNewBook(newBook));

    e.target.reset();
  };
  return (
    <section className="add-book">
      <h3>Add Book</h3>
      <form onSubmit={handleSubmit}>
        <input name="bookName" type="text" placeholder="Book Name" required />
        <input name="bookAuthor" type="text" placeholder="Author" required />
        <input type="submit" placeholder="Submit" />
      </form>
    </section>
  );
};

export default AddBook;
