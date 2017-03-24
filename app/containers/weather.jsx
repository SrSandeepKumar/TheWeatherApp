import React, { PropTypes } from 'react';

const Message = ({ props }) => {
  return (<div> the weather app - from container </div>);
};

Message.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  dismissMessage: PropTypes.func.isRequired
};

export default Message;
