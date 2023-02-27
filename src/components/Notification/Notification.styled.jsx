import styled from '@emotion/styled';

export const Text = styled.p`
  background-color: ${({ theme }) => {
    return theme.colors.white;
  }};
  outline: 1px solid
    ${({ theme }) => {
      return theme.colors.white;
    }};
  width: 170px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
