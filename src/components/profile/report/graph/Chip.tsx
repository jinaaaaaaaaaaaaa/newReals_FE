import * as S from './Chip.Style';

interface ChipProps {
  type: 'quiz' | 'attendance' | 'insight';
  count: number;
}

const typeText = {
  quiz: '퀴즈',
  attendance: '출석',
  insight: '인사이트',
};

const Chip = ({ type, count }: ChipProps) => {
  return (
    <S.Container>
      <S.Chip $type={type}>{typeText[type]}</S.Chip>
      <S.Text>{count}회</S.Text>
    </S.Container>
  );
};

export default Chip;
