import PropTypes from 'prop-types';
import Button from '../Button/Button';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ feedbackOptions, onClick }) => {
    return (
        <ul className={css.feedback}>
            {feedbackOptions.map((feedbackOption) =>
                <li className={css.feedbackOption} key={feedbackOption}>
                    <Button feedbackOption={feedbackOption} onClick={onClick} />
                </li>
            )}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    feedbackOptions: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FeedbackOptions;