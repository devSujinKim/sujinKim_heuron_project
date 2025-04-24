import styled, { keyframes } from 'styled-components';

export const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  min-height: calc(100vh - 60px);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${({ theme }) => theme.colors.lightGray};
  border-top: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;
