import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px;
`;

export const Title = styled.h1`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 14px;
`;

export const SearchBox = styled.div`
  position: relative;
  background-color: #1e1e1e;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #333;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  background-color: transparent;
  border: none;
  color: white;
  padding-right: 40px;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: #888;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #1e1e1e;
  border-radius: 4px;
  overflow: hidden;
  table-layout: fixed;
`;

export const TableHead = styled.thead`
  background-color: #333;
`;

export const TableHeader = styled.th`
  padding: 16px;
  width: 33.33%;
  text-align: left;
  color: white;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #333;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 16px;
  text-align: left;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const HighlightedText = styled.span`
  background-color: #61d366;
  padding: 0 2px;
  border-radius: 2px;
`;

export const EmptyMessage = styled.td`
  text-align: center;
  padding: 16px;
  color: #888;
`;
