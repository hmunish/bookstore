import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Button = ({ btnType, classes, textCont }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const { id } = e.target.closest('li').dataset;
    dispatch(deleteBook(id));
  };
  return (
    <button
      onClick={
        btnType === 'button' && textCont === 'Remove' ? handleClick : () => {}
      }
      type={btnType === 'button' ? 'button' : 'submit'}
      className={classes}
    >
      {textCont}
    </button>
  );
};

Button.defaultProps = {
  btnType: '',
  classes: '',
  textCont: '',
};

Button.propTypes = {
  btnType: PropTypes.string,
  classes: PropTypes.string,
  textCont: PropTypes.string,
};

export default Button;
