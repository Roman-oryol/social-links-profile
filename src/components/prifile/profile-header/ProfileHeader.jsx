import {
  ProfilePic,
  Header,
  ProfileName,
  ProfileLocation,
  ProfileBio,
} from './styles';
import profileImage from '../../../assets/images/avatar-jessica.jpeg';

function ProfileHeader({ name, location, bio }) {
  return (
    <Header>
      <ProfilePic src={profileImage} alt="Profile image" />
      <div>
        <ProfileName>{name}</ProfileName>
        <ProfileLocation>{location}</ProfileLocation>
      </div>
      <ProfileBio>{bio}</ProfileBio>
    </Header>
  );
}

export default ProfileHeader;
