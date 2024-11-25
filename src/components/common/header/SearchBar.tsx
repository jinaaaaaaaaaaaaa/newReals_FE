import * as S from './SearchBar.Style';
import SearchIcon from '../../../assets/icons/SearchIcon.svg';

interface SearchBar extends React.InputHTMLAttributes<HTMLInputElement> {
  onClick: () => void;
}

const SearchBar = ({ onClick, ...props }: SearchBar) => {
  return (
    <S.InputPart>
      <S.Input {...props} />
      <S.SearchImg src={SearchIcon} alt="검색" onClick={onClick} />
    </S.InputPart>
  );
};

export default SearchBar;
