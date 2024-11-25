import * as S from './Count.Style';

interface CountProps {
  chip: string;
  count: number;
}

const CHIP_DATA: Record<string, string> = {
  quiz: '퀴즈',
  insight: '인사이트',
  scrap: '스크랩',
};

const Count = ({ chip, count }: CountProps) => {
  const chipText = CHIP_DATA[chip];

  return (
    <S.Count>
      <S.Chip>{chipText}</S.Chip>
      <S.Text>{count}회</S.Text>
    </S.Count>
  );
};

export default Count;
