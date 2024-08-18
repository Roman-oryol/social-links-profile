import { Article } from './styles';
import profileOwner from '../../mocks/profileOwner';
import ProfileHeader from './profile-header/ProfileHeader';
import ProfileLinksList from './profile-links-list/ProfileLinksList';

const Profile = () => {
  return (
    <Article>
      <ProfileHeader {...profileOwner} />
      <ProfileLinksList socialLinks={profileOwner.socialLinks} />
    </Article>
  );
};

export default Profile;
