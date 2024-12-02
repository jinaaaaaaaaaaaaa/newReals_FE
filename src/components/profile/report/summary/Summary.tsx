import * as S from './Summary.Style';

interface SummaryProps {
  summary: string;
}

const Summary = ({ summary }: SummaryProps) => {
  return (
    <S.Cotainer>
      <S.Title>이번달 분석 요약</S.Title>
      <S.Summary>{summary}</S.Summary>
    </S.Cotainer>
  );
};

export default Summary;
