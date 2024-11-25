import * as S from './Chip.Style';

interface ChipProps {
  children: React.ReactNode;
}

/**
 *
 * @param children - quizAnwer에서 사용되는 Chip 안의 글씨
 * @returns
 */
const Chip = ({ children }: ChipProps) => {
  return <S.Chip>{children}</S.Chip>;
};
export default Chip;
