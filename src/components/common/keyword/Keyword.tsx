import * as S from './Keyword.Style';

interface KeywordProps {
  children: string;
  isActive: boolean;
  onToggle: (keyword: string) => void;
}

/**
 *
 * @param children - 관심사 선택 키워드안의 글씨
 * @param isActive - 키워드 선택의 유무
 * @param onToggle - 키워드 클릭 시 수행할 함수
 * @returns
 */
const Keyword = ({ children, isActive, onToggle }: KeywordProps) => {
  const handleClick = () => {
    onToggle(children);
  };

  return (
    <S.Keyword $isActive={isActive} onClick={handleClick}>
      {children}
    </S.Keyword>
  );
};

export default Keyword;
