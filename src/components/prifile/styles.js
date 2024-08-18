import styled, { css } from 'styled-components';
import variables from '../../common/variables';

const Article = styled.article`
  min-width: 327px;
  max-width: 384px;
  ${({ theme }) => css`
    padding: ${theme.spacing.large};
    line-height: ${theme.lineHeight};
    color: ${theme.color.white};
    background-color: ${theme.color.darkGrey};

    @media (min-width: 384px) {
      padding: ${theme.spacing.extraLarge};
    }
  `}
  border-radius: 12px;

  @media (min-width: 384px) {
    width: 384px;
  }
`;

export { Article };
