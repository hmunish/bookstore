import PropTypes from 'prop-types';

const Button = ({ btnType, classes, textCont }) => (
  <button type={btnType === 'button' ? 'button' : 'submit'} className={classes}>
    {textCont}
  </button>
);

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
