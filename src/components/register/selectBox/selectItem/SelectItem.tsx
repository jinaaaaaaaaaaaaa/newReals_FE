import * as S from './SelectItem.Style';

interface SelectItemProps {
  keyword: string;
  onRemove: () => void;
}

/**
 *
 * @param keyword - 선택된 키워드
 * @param onRemove - 키워드 버튼 클릭 시 해당 키워드 지우는 함수
 * @returns
 */
const SelectItem = ({ keyword, onRemove }: SelectItemProps) => {
  return (
    <S.Keyword>
      {keyword}
      <S.Icon onClick={onRemove} />
    </S.Keyword>
  );
};

export default SelectItem;
