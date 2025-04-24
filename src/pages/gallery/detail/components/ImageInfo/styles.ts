import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding-top: 24px;
`;

export const InfoRow = styled.div`
  display: flex;
  margin-bottom: 12px;
  padding: 8px 0;
`;

export const InfoLabel = styled.span`
  font-weight: bold;
  width: 100px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const InfoValue = styled.span`
  flex: 1;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
