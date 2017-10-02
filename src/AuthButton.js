import React from 'react';
import { connect } from 'react-redux';
import { authWithCaptcha, authWithRegistration } from './store/auth';

const AuthButton = (props) => {
  const handleClick = () => props.authWithCaptcha();

  return (
    <button onClick={handleClick} type="butotn"> Send Authentication </button>
  );
}

export default connect(
  null,
  {
    authWithCaptcha: authWithCaptcha.pending,
    authWithRegistration,
  }
)(AuthButton);

