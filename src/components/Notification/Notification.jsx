import PropTypes from 'prop-types';
import { Message } from "../Notification/Notification.styled"

export const Notification = ({message}) => {
    return <div>
        <Message>{ message }</Message>
    </div>
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};