import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  HighlightedText,
  EmptyMessage,
} from '../../styles';

interface Item {
  id: number;
  column1: string;
  column2: string;
  column3: string;
}

interface DataTableProps {
  data: Item[];
  searchTerms: {
    column1: string;
    column2: string;
    column3: string;
  };
}

const DataTable = ({ data, searchTerms }: DataTableProps) => {
  // 텍스트에서 검색어를 하이라이트하는 함수
  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;

    try {
      // 정규표현식 특수문자 이스케이프 처리
      const escapedSearchTerm = searchTerm.replace(
        /[.*+?^${}()|[\]\\]/g,
        '\\$&'
      );
      const regex = new RegExp(`(${escapedSearchTerm})`, 'gi');
      const parts = text.split(regex);

      return parts.map((part, index) => {
        if (part.toLowerCase() === searchTerm.toLowerCase()) {
          return <HighlightedText key={index}>{part}</HighlightedText>;
        }
        return part;
      });
    } catch {
      // 정규표현식 오류 시 기본 텍스트 반환
      return text;
    }
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Column 1</TableHeader>
          <TableHeader>Column 2</TableHeader>
          <TableHeader>Column 3</TableHeader>
        </TableRow>
      </TableHead>
      <tbody>
        {data.length > 0 ? (
          data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                {highlightText(item.column1, searchTerms.column1)}
              </TableCell>
              <TableCell>
                {highlightText(item.column2, searchTerms.column2)}
              </TableCell>
              <TableCell>
                {highlightText(item.column3, searchTerms.column3)}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <EmptyMessage colSpan={3}>검색 결과가 없습니다.</EmptyMessage>
          </TableRow>
        )}
      </tbody>
    </Table>
  );
};

export default DataTable;
