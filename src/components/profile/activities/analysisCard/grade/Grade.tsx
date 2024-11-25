import * as S from './Grade.Style';

interface GradeProps {
  grade: number;
  category: string;
  subCategory: string;
  percent: number;
}

/**
 *
 * @param grade - 순위
 * @param category - 카테고리
 * @param subCategory - 소카테고리
 * @param percent - 비율
 * @returns
 */
const Grade = ({ grade, category, subCategory, percent }: GradeProps) => {
  return (
    <S.Container>
      <S.Grade>{grade}위</S.Grade>
      <p>{`${category} > ${subCategory} (${percent}%)`}</p>
    </S.Container>
  );
};

export default Grade;
