import { useEffect, useState } from 'react';
import * as S from './Insight.Style';
import Item from './Item';
import { getInsight } from '../../../api/Main';

interface InsightProps {
  topic: string;
  category: string;
  basenewsId: number;
}

const Insight = () => {
  const [insight, setInsight] = useState<InsightProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const insightData = await getInsight();
      setInsight(insightData);
    };
    fetchData();
  }, []);

  return (
    <S.Container>
      <S.TextContainer>
        <S.Text>오늘의 인사이트</S.Text>
        <S.Description>
          newREALs에서 선정한 인사이트 5개를 확인하고 나의 의견도 적으러 가볼까요?
        </S.Description>
      </S.TextContainer>
      <S.Insight>
        {insight.map((item) => (
          <Item
            key={item.basenewsId}
            category={item.category}
            title={item.topic}
            newsId={item.basenewsId}
          />
        ))}
      </S.Insight>
    </S.Container>
  );
};

export default Insight;
