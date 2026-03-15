import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';

import {
  ProfileContainer,
  AvatarCircle,
  AvatarInitials,
  DisplayName,
  EmailText,
  MemberSince,
  Divider,
  InfoCard,
  InfoRow,
  InfoLabel,
  InfoValue,
  QuickLinks,
  QuickLinkButton,
  SignOutWrapper,
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

  if (!currentUser) return null;

  const { displayName, email, metadata } = currentUser;

  const initials = displayName
    ? displayName.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : email[0].toUpperCase();

  const memberSince = metadata?.creationTime
    ? new Date(metadata.creationTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
      })
    : null;

  const signOutUser = () => {
    dispatch(signOutStart());
    navigate('/');
  };

  return (
    <ProfileContainer>
      <AvatarCircle>
        <AvatarInitials>{initials}</AvatarInitials>
      </AvatarCircle>

      <DisplayName>{displayName || 'Welcome!'}</DisplayName>
      <EmailText>{email}</EmailText>
      {memberSince && <MemberSince>Member since {memberSince}</MemberSince>}

      <Divider />

      <InfoCard>
        <InfoRow>
          <InfoLabel>Name</InfoLabel>
          <InfoValue>{displayName || '—'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Email</InfoLabel>
          <InfoValue>{email}</InfoValue>
        </InfoRow>
        {memberSince && (
          <InfoRow>
            <InfoLabel>Joined</InfoLabel>
            <InfoValue>{memberSince}</InfoValue>
          </InfoRow>
        )}
      </InfoCard>

      <QuickLinks>
        <QuickLinkButton onClick={() => navigate('/shop')}>
          Browse Shop
        </QuickLinkButton>
        <QuickLinkButton onClick={() => navigate('/checkout')}>
          View Cart
        </QuickLinkButton>
      </QuickLinks>

      <SignOutWrapper>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={signOutUser}>
          Sign Out
        </Button>
      </SignOutWrapper>
    </ProfileContainer>
  );
};

export default Profile;
