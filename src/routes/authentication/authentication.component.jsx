import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { selectCurrentUser } from '../../store/user/user.selector';

import {
  AuthenticationContainer,
  ToggleLink,
  MobileFormContainer,
} from './authentication.styles';

const Authentication = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

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
