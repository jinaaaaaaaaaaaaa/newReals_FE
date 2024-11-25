import { useState } from 'react';
import * as S from './Interest.Style';
import Bubble from './Bubble';
import Count from './Count';

const MOCK_DATA = [
  { category: '정치', percent: 30 },
  { category: '경제', percent: 30 },
  { category: '사회', percent: 30 },
];

type CategoryKey = '정치' | '경제' | '사회';

type CategoryData = {
  quiz: number;
  insight: number;
  scrap: number;
};

type MockDataType = Record<CategoryKey, CategoryData>;

// MOCK 데이터 정의
const MOCK_DATA2: MockDataType = {
  정치: { quiz: 5, insight: 5, scrap: 10 },
  경제: { quiz: 5, insight: 5, scrap: 10 },
  사회: { quiz: 5, insight: 5, scrap: 10 },
};

const Interest = () => {
  const [selectCategory, setSelectCategory] = useState<CategoryKey>('정치');

  const getCategoryData = (category: CategoryKey): CategoryData | null => {
    return MOCK_DATA2[category] || null;
  };

  const currentCategoryData = getCategoryData(selectCategory);

  return (
    <S.Container>
      <S.Title>11월 관심도 분석</S.Title>
      <S.Description>* 각 카테고리를 클릭해 활동량을 확인해보세요!</S.Description>
      <S.Analysis>
        <S.Bubbles>
          {MOCK_DATA.map((item) => (
            <Bubble
              key={item.category}
              isSelected={selectCategory === item.category}
              category={item.category}
              percent={item.percent}
              onClick={() => setSelectCategory(item.category as CategoryKey)}
            />
          ))}
        </S.Bubbles>
        <S.Content>
          <S.Text>{selectCategory} 카테고리에서는 다음과 같이 활동했어요.</S.Text>
          <S.Chips>
            {currentCategoryData &&
              Object.entries(currentCategoryData).map(([key, value]) => (
                <Count key={key} chip={key} count={value} />
              ))}
          </S.Chips>
        </S.Content>
      </S.Analysis>
    </S.Container>
  );
};

export default Interest;
