import styled, { css } from 'styled-components';
import cursor from '../../../assets/images/handcursor.png';

const ProfileLink = styled.a`
  display: block;
  padding: 12px;
  ${({ theme }) => css`
    font-size: ${theme.fontSize.small};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.color.white};
    background-color: ${theme.color.grey};
  `}
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    ${({ theme }) => css`
      background-color: ${theme.color.neonGreen};
      color: ${theme.color.grey};
    `}
    cursor: url(${cursor}) 9 -10, pointer;
  }
`;

export default ProfileLink;
