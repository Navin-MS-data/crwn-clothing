import { useState } from 'react';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import {
  AuthenticationContainer,
  ToggleLink,
  MobileFormContainer,
} from './authentication.styles';

const Authentication = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <AuthenticationContainer>
      <div className='desktop-view'>
        <SignInForm />
        <SignUpForm />
      </div>
      <MobileFormContainer className='mobile-view'>
        {showSignUp ? <SignUpForm /> : <SignInForm />}
        <ToggleLink onClick={toggleForm}>
          {showSignUp
            ? 'Already have an account? Sign In'
            : "Don't have an account? Sign Up"}
        </ToggleLink>
      </MobileFormContainer>
    </AuthenticationContainer>
  );
};

export default Authentication;
