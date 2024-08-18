import styled, { css } from 'styled-components';

const ComponentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${theme.color.black};
  `}
`;

export default ComponentWrapper;
