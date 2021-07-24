import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ feedbackOption, onClick }) => <button className={css.feedbackOption} onClick={onClick} value={feedbackOption}>{feedbackOption}</button>;

Button.propTypes = {
    feedbackOption: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button;


