import { useState } from 'react';
import * as S from './Interest.Style';
import Bubble from './Bubble';
import Count from './Count';
import { CategoryData, CategoryKey } from '../type/Report';

interface InterestProps {
  month: number;
  interest: Record<CategoryKey, CategoryData[]>;
}

const Interest = ({ month, interest }: InterestProps) => {
  const [selectCategory, setSelectCategory] = useState<CategoryKey>('사회');
  const currentCategoryData = interest[selectCategory]?.[0];

  return (
    <S.Container>
      <S.Title>{month}월 관심도 분석</S.Title>
      <S.Description>* 각 카테고리를 클릭해 활동량을 확인해보세요!</S.Description>
      <S.Analysis>
        <S.Bubbles>
          {Object.entries(interest).map(([category, data]) => (
            <Bubble
              key={category}
              isSelected={selectCategory === category}
              category={category}
              percent={data[0]?.percentage || 0}
              onClick={() => setSelectCategory(category as CategoryKey)}
            />
          ))}
        </S.Bubbles>
        <S.Content>
          <S.Text>{selectCategory} 카테고리에서는 다음과 같이 활동했어요.</S.Text>
          <S.Chips>
            <S.Chips>
              {currentCategoryData &&
                Object.entries(currentCategoryData)
                  .filter(([key]) => key !== 'percentage')
                  .map(([key, value]) => <Count key={key} chip={key} count={value} />)}
            </S.Chips>
          </S.Chips>
        </S.Content>
      </S.Analysis>
    </S.Container>
  );
};

export default Interest;
