import styled from 'styled-components';

export const ErrorText = styled.div`
  text-align: center;
  padding: 48px;
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 32px 0;
`;

export const BackButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  margin: 32px auto;
  display: block;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
