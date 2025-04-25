import { styled } from 'styled-components';
import { IconWrapper } from '../../styles';

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const PlayerListTitle = styled.h3`
  font-size: 18px;
  margin: 20px 0 10px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const PlayerListItem = styled.div<{ $isWinner: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin-bottom: 8px;
  border-radius: 4px;
  background-color: ${({ $isWinner, theme }) =>
    $isWinner ? 'rgba(44, 62, 80, 0.1)' : theme.colors.lightGray};
  font-weight: ${({ $isWinner }) => ($isWinner ? 'bold' : 'normal')};
`;

export const TrophyIcon = styled(IconWrapper)`
  color: goldenrod;
`;
