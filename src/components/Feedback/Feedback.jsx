import PropTypes from 'prop-types';
import { Button, Container } from "../Feedback/Feedback.styled";

export const Feedback = ({onLeaveFeedback}) => {
    return <Container>
        <Button type="button" name="good" onClick={onLeaveFeedback}>
            Good
        </Button>
      
        <Button type="button" name="neutral" onClick={onLeaveFeedback}>
            Neutral
        </Button>
      
        <Button type="button" name="bad" onClick={onLeaveFeedback}>
            Bad
        </Button>
    </Container>
};

Feedback.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};