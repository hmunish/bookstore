/*eslint-disable */
import Button from "./cmsButton";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div>
        <h5 className="book-category">{book.category}</h5>
        <h3 className="book-name">{book.bookName}</h3>
        <p className="author">{book.author}</p>
        <div className="book-actions">
          <Button btnType="button" classes="book-actions" textCont="Comments" />
          <Button btnType="button" classes="book-actions" textCont="Remove" />
          <Button btnType="button" classes="book-actions" textCont="Edit" />
        </div>
      </div>
      <div className="completed-status">
        <progress value={book.completed} max={100}></progress>
        <p>
          {book.completed}% <span>Completed</span>
        </p>
      </div>
      <div>
        <p>Current Chapter</p>
        <p>Chapter 3: "A Lesson Learned"</p>
        <Button btnType="button" classes="update" textCont="Update progress" />
      </div>
    </div>
  );
};

export default BookCard;
