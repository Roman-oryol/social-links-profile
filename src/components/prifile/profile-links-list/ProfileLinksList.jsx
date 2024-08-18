import ProfileLink from '../profile-link/ProfileLink';
import { List, ListItem } from './styles';

function ProfileLinksList({ socialLinks }) {
  return (
    <List>
      {socialLinks &&
        socialLinks.map((link) => (
          <ListItem key={link.url}>
            <ProfileLink href={link.url}>{link.title}</ProfileLink>
          </ListItem>
        ))}
    </List>
  );
}

export default ProfileLinksList;
