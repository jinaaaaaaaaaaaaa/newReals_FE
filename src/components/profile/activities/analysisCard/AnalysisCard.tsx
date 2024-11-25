import { useState } from 'react';
import Chip from '../../../common/chip/Chip';
import Chart from '../analysisCard/chart/Chart';
import * as S from './AnalysisCard.Style';
import { CATEGORIES } from '../../../../constants/Category';
import Grade from '../analysisCard/grade/Grade';

const CATEGORY = Object.keys(CATEGORIES);

const categoryData = {
  전체: [
    { rank: 1, category: '경제', subCategory: '소카테고리', value: 70 },
    { rank: 2, category: '사회', subCategory: '소카테고리', value: 20 },
    { rank: 3, category: '정치', subCategory: '소카테고리', value: 10 },
  ],
  사회: [
    { rank: 1, category: '사회', subCategory: '사건사고', value: 60 },
    { rank: 2, category: '사회', subCategory: '교육', value: 30 },
    { rank: 3, category: '사회', subCategory: '노동', value: 10 },
  ],
  정치: [
    { rank: 1, category: '정치', subCategory: '대통령실', value: 50 },
    { rank: 2, category: '정치', subCategory: '국회/정당', value: 30 },
    { rank: 3, category: '정치', subCategory: '북한', value: 20 },
  ],
  경제: [
    { rank: 1, category: '경제', subCategory: '금융', value: 40 },
    { rank: 2, category: '경제', subCategory: '증권', value: 35 },
    { rank: 3, category: '경제', subCategory: '부동산', value: 25 },
  ],
};

interface AnalysisCardProps {
  nickname: string;
}

const AnalysisCard = ({ nickname }: AnalysisCardProps) => {
  const [category, setCategory] = useState('전체');

  const handleClickCategory = (item: string) => {
    setCategory(item === category ? '전체' : item);
  };

  const values = (categoryData[category as keyof typeof categoryData] || []).map((item) => ({
    value: item.value,
    subCategory: item.subCategory,
  }));

  return (
    <S.Container>
      <div>
        <S.Title>이달의 뉴스 관심도 분석</S.Title>
        <S.Description>
          {nickname}님이 이번 달에 관심 있었던 뉴스 주제를 분석해 드릴게요.
        </S.Description>
      </div>
      <S.Analysis>
        <Chart category={category} values={values} />
        <S.Content>
          <S.Categories>
            {CATEGORY.map((item) => (
              <Chip
                key={item}
                isSelected={item === category}
                onClick={() => handleClickCategory(item)}
              >
                {item}
              </Chip>
            ))}
          </S.Categories>
          <S.GradeList>
            {categoryData[category as keyof typeof categoryData].map((item) => (
              <Grade
                key={item.rank}
                grade={item.rank}
                category={item.category}
                subCategory={item.subCategory}
                percent={item.value}
              />
            ))}
          </S.GradeList>
        </S.Content>
      </S.Analysis>
    </S.Container>
  );
};

export default AnalysisCard;
