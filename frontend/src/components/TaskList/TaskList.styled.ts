import styled from "styled-components";

export const ListItem = styled.li`
  border-bottom: 1px solid black;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  padding-bottom: 10px;
  max-width: 500px;
  word-break: break-word;
`;
