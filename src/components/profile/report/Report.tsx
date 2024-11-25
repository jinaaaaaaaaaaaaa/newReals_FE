import Graph from './graph/Graph';
import Interest from './interest/Interest';
import KeywordList from './keyword/KeywordList';
import * as S from './Report.Style';
import Summary from './summary/Summary';
import Trend from './trend/Trend';

const Report = () => {
  return (
    <S.Container>
      <S.TextContainer>
        뉴스님의 11월 분석 레포트
        <S.Description>11월 동안 뉴스님의 활동을 분석하여 레포트를 생성했어요.</S.Description>
      </S.TextContainer>
      <S.Report>
        <Interest />
        <Trend />
        <S.ContentContainer>
          <Graph />
          <KeywordList />
        </S.ContentContainer>
        <Summary />
      </S.Report>
    </S.Container>
  );
};

export default Report;
