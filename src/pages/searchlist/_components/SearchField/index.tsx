import { SearchBox, SearchInput, SearchIcon } from '../../styles';

interface SearchFieldProps {
  placeholder: string;
  value: string;
  onChange: (column: string, value: string) => void;
  column: string;
}

const SearchField = ({
  placeholder,
  value,
  onChange,
  column,
}: SearchFieldProps) => {
  return (
    <SearchBox>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(column, e.target.value)}
      />
      <SearchIcon>🔍</SearchIcon>
    </SearchBox>
  );
};

export default SearchField;
