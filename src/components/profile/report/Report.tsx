import { useEffect, useState } from 'react';
import Graph from './graph/Graph';
import Interest from './interest/Interest';
import KeywordList from './keyword/KeywordList';
import * as S from './Report.Style';
import Summary from './summary/Summary';
import Trend from './trend/Trend';
import { getReport } from '../../../api/Profile';
import { CategoryData, CategoryKey, CompareProps, TrendDataProps } from './type/Report';
import NoReportIcon from '../../../assets/icons/NoreportIcon.svg';
import { useNavigate } from 'react-router-dom';

interface ReportProps {
  name: string;
}

const Report = ({ name }: ReportProps) => {
  const [data, setData] = useState(false);
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
  const navigate = useNavigate();

  const month = new Date().getMonth() + 1;

  useEffect(() => {
    const fetchData = async () => {
      const reportData = await getReport();
      if (reportData) {
        setInterest(reportData.interest);
        setTrend(reportData.change);
        setCompare(reportData.compare);
        setKeyword(reportData.keyword);
        setFinalSummary(reportData.finalSummary);
        setData(true);
      }
    };

    fetchData();
  }, []);

  return (
    <S.Container>
      <S.TextContainer>
        {name}님의 {month}월 분석 레포트
        <S.Description>
          {data
            ? `${month}월 동안 ${name}님의 활동을 분석하여 레포트를 생성했어요.`
            : `${month}월 활동 데이터가 조금 부족했어요. 이번 달에는 newREALs와 함께 더 많은 활동을 해볼까요?`}
        </S.Description>
      </S.TextContainer>
      {data ? (
        <S.Report>
          <Interest month={month} interest={interest} />
          {trend && <Trend trend={trend} />}
          <S.ContentContainer>
            <Graph month={month} compare={compare} />
            <KeywordList keywordList={keyword} />
          </S.ContentContainer>
          <Summary summary={finalSummary} />
        </S.Report>
      ) : (
        <S.NoContent>
          <img src={NoReportIcon} />
          <S.Text>
            아직 레포트를 준비 중이에요.
            <br />
            이번 달 뉴스를 더 살펴 보러 갈까요?
          </S.Text>
          <S.Button
            onClick={() => {
              navigate('/home');
            }}
          >
            이번 달 뉴스 보러가기
          </S.Button>
        </S.NoContent>
      )}
    </S.Container>
  );
};

export default Report;
