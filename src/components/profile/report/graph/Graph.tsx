import { useState } from 'react';
import { CompareProps } from '../type/Report';
import Chip from './Chip';
import * as S from './Graph.Style';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface GraphProps {
  month: number;
  compare: CompareProps;
}

interface GraphDataProps {
  name: string;
  인사이트: number;
  출석: number;
  퀴즈: number;
}

const Graph = ({ month, compare }: GraphProps) => {
  const lastMonthData = compare.lastMonth[0];
  const thisMonthData = compare.thisMonth[0];
  const [selectedData, setSelectedData] = useState(thisMonthData);

  const handleBarClick = (data: GraphDataProps) => {
    if (data.name === `${month - 1}월`) {
      setSelectedData(lastMonthData);
    } else if (data.name === `${month}월`) {
      setSelectedData(thisMonthData);
    }
  };

  const data = [
    {
      name: `${month - 1}월`,
      인사이트: lastMonthData.insight,
      출석: lastMonthData.attendance,
      퀴즈: lastMonthData.quiz,
    },
    {
      name: `${month}월`,
      인사이트: thisMonthData.insight,
      출석: thisMonthData.attendance,
      퀴즈: thisMonthData.quiz,
    },
  ];

  return (
    <S.Cotainer>
      <S.Title>이번달 활동 분석</S.Title>
      <S.GraphContainer>
        * 지난 달의 활동과 이번 달 활동을 비교해봐요!
        <ResponsiveContainer width="100%" height={136}>
          <BarChart
            data={data}
            margin={{ top: 0, right: 58, left: 58, bottom: 0 }}
            onClick={(event) => handleBarClick(event.activePayload?.[0]?.payload)}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="인사이트" stackId="a" fill="#8C80FF" name="인사이트" />
            <Bar dataKey="출석" stackId="a" fill="#BDB6FF" name="출석" />
            <Bar dataKey="퀴즈" stackId="a" fill="#D2CEFF" name="퀴즈" />
          </BarChart>
        </ResponsiveContainer>
        <S.Content>
          <Chip type="quiz" count={selectedData.quiz} />
          <Chip type="attendance" count={selectedData.attendance} />
          <Chip type="insight" count={selectedData.insight} />
        </S.Content>
      </S.GraphContainer>
    </S.Cotainer>
  );
};

export default Graph;
