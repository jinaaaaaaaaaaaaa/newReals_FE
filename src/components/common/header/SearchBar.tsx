import * as S from './SearchBar.Style';
import SearchIcon from '../../../assets/icons/SearchIcon.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState<string>('');
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    navigate(`/search?query=${encodeURIComponent(input)}`, { state: { input } });
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      navigate(`/search?query=${encodeURIComponent(input)}`, { state: { input } });
      setInput('');
    }
  };

  return (
    <S.InputPart>
      <S.Input
        placeholder="뉴스 검색"
        value={input}
        onChange={onChangeInput}
        onKeyDown={handleKeyDown}
      />
      <S.SearchImg src={SearchIcon} alt="검색" onClick={handleClick} />
    </S.InputPart>
  );
};

export default SearchBar;
