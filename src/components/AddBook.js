/*eslint-disable */
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/booksSlice";
import { v4 as uuidv4 } from "uuid";

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: e.target.bookName.value,
      author: e.target.bookAuthor.value,
      category: "Nonfiction",
      completed: 0,
    };
    dispatch(addBook(newBook));
  };
  return (
    <section className="add-book">
      <h3>Add Book</h3>
      <form onSubmit={handleSubmit}>
        <input name="bookName" type="text" placeholder="Book Name" />
        <input name="bookAuthor" type="text" placeholder="Author" />
        <input type="submit" placeholder="Submit" />
      </form>
    </section>
  );
};

export default AddBook;
