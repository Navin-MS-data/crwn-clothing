import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import Button from '../../components/button/button.component';

import {
  ProfileContainer,
  ProfileHeader,
  ProfileInfo,
  ProfileEmail,
  ProfileActions,
} from './profile.styles';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/auth');
    }
  }, [currentUser, navigate]);

  const signOutUser = () => {
    dispatch(signOutStart());
    navigate('/');
  };

  if (!currentUser) {
    return null;
  }

  return (
    <ProfileContainer>
      <ProfileHeader>My Profile</ProfileHeader>
      <ProfileInfo>
        <ProfileEmail>
          <strong>Email:</strong> {currentUser.email}
        </ProfileEmail>
      </ProfileInfo>
      <ProfileActions>
        <Button onClick={signOutUser}>Sign Out</Button>
      </ProfileActions>
    </ProfileContainer>
  );
};

export default Profile;
