import { useState, useMemo } from 'react';
import { Container, Title, SearchContainer } from './styles';
import { sampleData } from './data';
import SearchField from './_components/SearchField';
import DataTable from './_components/DataTable';

export interface Item {
  id: number;
  column1: string;
  column2: string;
  column3: string;
}

type SearchableColumn = keyof Pick<Item, 'column1' | 'column2' | 'column3'>;

const columns: SearchableColumn[] = ['column1', 'column2', 'column3'];

const SearchList = () => {
  const [searchTerms, setSearchTerms] = useState({
    column1: '',
    column2: '',
    column3: '',
  });

  const filteredData = useMemo(() => {
    // 모든 검색어가 비어있으면 전체 데이터 반환
    const hasActiveSearch = Object.values(searchTerms).some(
      (term) => term !== ''
    );
    if (!hasActiveSearch) return sampleData;

    return sampleData.filter((item) => {
      // 모든 컬럼에 대해 검색 조건 확인 (AND 조건)
      return columns.every((column) => {
        const searchTerm = searchTerms[column];
        // 검색어가 비어있으면 항상 true (해당 컬럼은 필터링하지 않음)
        if (!searchTerm) return true;
        // 검색어가 있으면 포함 여부 확인
        return item[column].toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
  }, [searchTerms]);

  const handleSearchChange = (column: string, value: string) => {
    setSearchTerms((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  return (
    <Container>
      <Title>검색 리스트</Title>
      <SearchContainer>
        {columns.map((column) => (
          <SearchField
            key={column}
            placeholder={`${column} 검색`}
            value={searchTerms[column]}
            onChange={handleSearchChange}
            column={column}
          />
        ))}
      </SearchContainer>
      <DataTable data={filteredData} searchTerms={searchTerms} />
    </Container>
  );
};

export default SearchList;
