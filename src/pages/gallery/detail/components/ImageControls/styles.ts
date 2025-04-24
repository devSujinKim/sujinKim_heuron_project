import styled from 'styled-components';

export const ControlsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin: 8px 0 24px;
`;

export const ControlButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
