import { useEffect, useState } from 'react';
import Chip from '../../../common/chip/Chip';
import Chart from '../analysisCard/chart/Chart';
import * as S from './AnalysisCard.Style';
import { CATEGORIES } from '../../../../constants/Category';
import Grade from '../analysisCard/grade/Grade';
import { getInterest } from '../../../../api/Profile';
import { useNavigate } from 'react-router-dom';

const CATEGORY = Object.keys(CATEGORIES);

interface AnalysisDataProps {
  category: string;
  subCategory: string;
  percentage: number;
}

interface InterestDataProps {
  전체: AnalysisDataProps[];
  경제: AnalysisDataProps[];
  정치: AnalysisDataProps[];
  사회: AnalysisDataProps[];
}

interface AnalysisCardProps {
  nickname: string;
}

const AnalysisCard = ({ nickname }: AnalysisCardProps) => {
  const [category, setCategory] = useState('전체');
  const [interestData, setInterestData] = useState<InterestDataProps>({
    전체: [],
    경제: [],
    정치: [],
    사회: [],
  });
  const navigate = useNavigate();

  const handleClickCategory = (item: string) => {
    setCategory(item === category ? '전체' : item);
  };

  useEffect(() => {
    const fetchData = async () => {
      const interestData = await getInterest();
      if (interestData) {
        setInterestData(interestData);
      }
    };
    fetchData();
  }, []);

  const filteredData =
    category === '전체'
      ? interestData.전체
      : interestData[category as keyof InterestDataProps] || [];

  return (
    <S.Container>
      <div>
        <S.Title>이달의 뉴스 관심도 분석</S.Title>
        <S.Description>
          {nickname}님이 이번 달에 관심 있었던 뉴스 주제를 분석해 드릴게요.
        </S.Description>
      </div>

      {interestData.전체.length > 0 ? (
        <S.Analysis>
          <Chart
            category={category}
            values={filteredData.map((item) => ({
              value: item.percentage,
              subCategory: item.subCategory,
            }))}
          />
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
              {interestData[category as keyof typeof interestData].map((item, index) => (
                <Grade
                  key={index}
                  grade={index + 1}
                  category={item.category}
                  subCategory={item.subCategory}
                  percent={item.percentage}
                />
              ))}
            </S.GradeList>
          </S.Content>
        </S.Analysis>
      ) : (
        <S.NoContent>
          <S.NoText>
            아직 관심 있는 뉴스가 없어요! <br /> 관심 있는 뉴스를 찾으러 가볼까요?
          </S.NoText>
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

export default AnalysisCard;
