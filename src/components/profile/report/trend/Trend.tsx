import { TrendDataProps } from '../type/Report';
import Item from './Item';
import * as S from './Trend.Style';

interface TrendProps {
  trend: TrendDataProps;
}

const Trend = ({ trend }: TrendProps) => {
  return (
    <S.Container>
      <S.Title>관심 변화 트렌드</S.Title>
      <S.Trend>
        <S.Description>{trend.GPTComment}</S.Description>
        {!trend.hasNoLastData && (
          <S.ItemContainer>
            {trend.사회 !== null && (
              <Item category="사회" percent={trend.사회} isBig={trend.biggest === '사회'} />
            )}
            {trend.정치 !== null && (
              <Item category="정치" percent={trend?.정치} isBig={trend.biggest === '정치'} />
            )}
            {trend.경제 !== null && (
              <Item category="경제" percent={trend?.경제} isBig={trend.biggest === '경제'} />
            )}
          </S.ItemContainer>
        )}
      </S.Trend>
    </S.Container>
  );
};

export default Trend;
