import { useEffect, useState } from 'react';
import Graph from './graph/Graph';
import Interest from './interest/Interest';
import KeywordList from './keyword/KeywordList';
import * as S from './Report.Style';
import Summary from './summary/Summary';
import Trend from './trend/Trend';
import { getReport } from '../../../api/Profile';
import { CategoryData, CategoryKey, CompareProps, TrendDataProps } from './type/Report';

const Report = () => {
  const [interest, setInterest] = useState<Record<CategoryKey, CategoryData[]>>({
    정치: [{ percentage: 0, quiz: 0, insight: 0, scrap: 0 }],
    경제: [{ percentage: 0, quiz: 0, insight: 0, scrap: 0 }],
    사회: [{ percentage: 0, quiz: 0, insight: 0, scrap: 0 }],
  });
  const [trend, setTrend] = useState<TrendDataProps>();
  const [compare, setCompare] = useState<CompareProps>({
    lastMonth: [{ quiz: 0, attendance: 0, insight: 0 }],
    thisMonth: [{ quiz: 0, attendance: 0, insight: 0 }],
  });

  const [keyword, setKeyword] = useState<string[]>([]);
  const [finalSummary, setFinalSummary] = useState('');

  const nickname = localStorage.getItem('nickname');
  const month = new Date().getMonth() + 1;

  useEffect(() => {
    const fetchData = async () => {
      const reportData = await getReport();
      console.log(reportData);
      if (reportData) {
        setInterest(reportData.interest);
        setTrend(reportData.change);
        setCompare(reportData.compare);
        setKeyword(reportData.keyword);
        setFinalSummary(reportData.finalSummary);
      }
    };

    fetchData();
  }, []);

  return (
    <S.Container>
      <S.TextContainer>
        {nickname}님의 {month}월 분석 레포트
        <S.Description>
          {month}월 동안 {nickname}님의 활동을 분석하여 레포트를 생성했어요.
        </S.Description>
      </S.TextContainer>
      <S.Report>
        <Interest month={month} interest={interest} />
        {trend && <Trend trend={trend} />}
        <S.ContentContainer>
          <Graph month={month} compare={compare} />
          <KeywordList keywordList={keyword} />
        </S.ContentContainer>
        <Summary summary={finalSummary} />
      </S.Report>
    </S.Container>
  );
};

export default Report;
