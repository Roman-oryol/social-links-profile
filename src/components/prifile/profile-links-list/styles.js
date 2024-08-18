import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing.medium};
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
`;

export { List, ListItem };
