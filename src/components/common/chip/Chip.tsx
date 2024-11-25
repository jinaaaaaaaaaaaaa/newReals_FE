import * as S from './Chip.Style';

interface ChipProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
  size?: 'small' | 'large';
}

/**
 *
 * @param children - Chip 안에 들어갈 글씨
 * @param isSelected - Chip 선택 유무를 가진 state
 * @param onClick - Chip을 클릭했을 시 수행해야 할 함수
 * @param size - (optional) default 값은 large
 * @returns
 */
const Chip = ({ children, isSelected, onClick, size = 'large' }: ChipProps) => {
  return (
    <S.Chip $isSelected={isSelected} onClick={onClick} $size={size}>
      {children}
    </S.Chip>
  );
};

export default Chip;
