import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { SignInContainer, ButtonsContainer, ErrorMessage } from './sign-in-form.styles';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';
import { selectUserError } from '../../store/user/user.selector';

const defaultFormFields = {
  email: '',
  password: '',
};

const getErrorMessage = (error) => {
  if (!error) return null;
  switch (error.code) {
    case 'auth/user-not-found':
    case 'auth/invalid-credential':
      return 'No account found with this email.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Please try again later.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    default:
      return 'Sign in failed. Please check your credentials.';
  }
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const userError = useSelector(selectUserError);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(emailSignInStart(email, password));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const errorMessage = getErrorMessage(userError);

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
