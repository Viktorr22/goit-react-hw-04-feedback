import PropTypes from 'prop-types';
import { ButtonsBox, Button } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';



export function FeedbackOptions({options, onLeaveFeedback }) {
    return (   
        <ButtonsBox>
            {options.map((option) => (
                <Button key={nanoid()} type='button' onClick = {() => onLeaveFeedback(option)}>{option}</Button>
            ))}             
        </ButtonsBox>      
    );
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
