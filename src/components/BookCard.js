import PropTypes from 'prop-types';
import Button from './cmsButton';

const BookCard = ({ book }) => (
  <li className="book-card" data-id={book.item_id}>
    <div>
      <h5 className="book-category">{book.category}</h5>
      <h3 className="book-name">{book.title}</h3>
      <p className="author">{book.author}</p>
      <div className="book-actions">
        <Button btnType="button" classes="book-actions" textCont="Comments" />
        <Button btnType="button" classes="book-actions" textCont="Remove" />
        <Button btnType="button" classes="book-actions" textCont="Edit" />
      </div>
    </div>
    <div className="completed-status">
      <progress value={25} max={100} />
      <p>
        25%
        <span> Completed</span>
      </p>
    </div>
    <div>
      <p>Current Chapter</p>
      <p>Chapter 3: &quot;A Lesson Learned&quot;</p>
      <Button btnType="button" classes="update" textCont="Update progress" />
    </div>
  </li>
);

BookCard.defaultProps = {
  book: {},
};

BookCard.propTypes = {
  book: PropTypes.object,
};

export default BookCard;
