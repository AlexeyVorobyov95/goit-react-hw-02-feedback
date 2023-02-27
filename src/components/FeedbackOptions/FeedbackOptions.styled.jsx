import styled from '@emotion/styled';

export const Button = styled.button`
  width: 80px;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  background-color: ${({ theme }) => {
    return theme.colors.white;
  }};
`;
