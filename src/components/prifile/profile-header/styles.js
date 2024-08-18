import styled, { css } from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  text-align: center;
`;

const ProfilePic = styled.img.attrs(({ src, alt }) => ({
  src: src,
  alt: alt,
}))`
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 50%;
`;

const ProfileName = styled.h1`
  margin: 0;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.small};
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.semiBold};
  `}
  text-align: center;
`;

const ProfileLocation = styled.p`
  margin: 0;
  ${({ theme }) => css`
    font-size: ${theme.fontSize.small};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.color.neonGreen};
  `}
  text-align: center;
`;

const ProfileBio = styled.p`
  margin: 0;
  ${({ theme }) => css`
    font-size: ${theme.fontSize.small};
    font-weight: ${theme.fontWeight.regular};
  `}
`;

export { ProfilePic, Header, ProfileName, ProfileLocation, ProfileBio };
