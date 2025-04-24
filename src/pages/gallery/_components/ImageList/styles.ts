import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  &:hover {
    background-color: rgba(51, 102, 255, 0.1);
    cursor: pointer;
  }
`;

export const TableHeader = styled.th`
  padding: 16px;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

export const ThumbnailCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #eee;
  width: 100px;
  height: 100px;
`;

export const ThumbnailContainer = styled.div`
  width: 100px;
  height: 100px;
`;
