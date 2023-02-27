import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;
  background-color: ${({ theme }) => {
    return theme.colors.gainsboro;
  }};
  border-radius: 10px;
  padding: 10px;
`;