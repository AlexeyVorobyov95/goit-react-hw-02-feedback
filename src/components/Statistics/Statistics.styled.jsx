import styled from '@emotion/styled';
export const Span = styled.span`
  margin-left: 10px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

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
`;