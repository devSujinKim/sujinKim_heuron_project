import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const CanvasContainer = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  overflow: hidden;

  canvas {
    display: block;
    margin: 0 auto;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding-top: 1.5rem;
`;

export const InfoRow = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
  padding: 0.5rem 0;
`;

export const InfoLabel = styled.span`
  font-weight: bold;
  width: 100px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const InfoValue = styled.span`
  flex: 1;
`;

export const BackButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  margin-top: 2rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const CanvasControls = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0.5rem 0 1.5rem;
`;

export const ControlButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NoImageText = styled.div`
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 2rem 0;
`;
