import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCurrentUser } from '../../store/user/user.selector';

import {
  ProfileContainer,
  ProfileCard,
  ProfileAvatar,
  ProfileInfo,
  ProfileName,
  ProfileEmail,
  ProfileDetail,
  ProfileLabel,
  ProfileValue,
} from './profile.styles';

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  if (!currentUser) {
    navigate('/auth');
    return null;
  }

  const getInitials = (name) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileAvatar>{getInitials(currentUser.displayName)}</ProfileAvatar>
        <ProfileInfo>
          <ProfileName>{currentUser.displayName || 'User'}</ProfileName>
          <ProfileEmail>{currentUser.email}</ProfileEmail>
        </ProfileInfo>
        <ProfileDetail>
          <ProfileLabel>Account Created:</ProfileLabel>
          <ProfileValue>{formatDate(currentUser.createdAt)}</ProfileValue>
        </ProfileDetail>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile;
