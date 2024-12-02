import * as S from './HeadNews.Style';
import { getRandomImage } from './GetRandomImage';
import Tag from '../tag/Tag';
import { useNavigate } from 'react-router-dom';
import LeftArrowIcon from '../../../assets/icons/LeftArrowIcon.svg?react';
import RightArrowIcon from '../../../assets/icons/RightArrowIcon.svg?react';
import PauseIcon from '../../../assets/icons/PauseIcon.svg';
import PlayIcon from '../../../assets/icons/PlayIcon.svg';

interface HeadNewsProps {
  id: number;
  category: string;
  subcategory: string;
  keyword: string;
  title: string;
  quiz: string;
  imagePath: string | null;
  index?: number;
  onPrevious?: () => void;
  onNext?: () => void;
  onPaused?: () => void;
  isPaused?: boolean;
}

/**
 *
 * @param id - 뉴스 항목의 고유 ID
 * @param category - 뉴스 카테고리
 * @param subcategory - 뉴스 세부 카테고리
 * @param keyword - 뉴스 키워드
 * @param title - 뉴스 제목
 * @param quiz - 퀴즈 내용
 * @param index - 뉴스 항목의 인덱스
 * @param imagePath - 뉴스의 이미지
 * @param onPrevious - 이전 뉴스로 이동하는 핸들러 함수
 * @param onNext - 다음 뉴스로 이동하는 핸들러 함수
 * @param onPaused - 뉴스 재생을 일시 정지하는 핸들러 함수
 * @param isPaused - 뉴스가 일시 정지 상태인지 여부를 나타내는 플래그
 * @returns
 */
const HeadNews = ({
  id,
  category,
  subcategory,
  keyword,
  title,
  quiz,
  imagePath,
  index,
  onPrevious,
  onNext,
  onPaused,
  isPaused,
}: HeadNewsProps) => {
  const imageUrl = getRandomImage({ category: '정치' }); // 이 부분 바뀌어야함
  const navigate = useNavigate();

  return (
    <S.HeadNews $imageUrl={imagePath ? imagePath : imageUrl}>
      <S.Container
        onClick={() => {
          navigate(`/newsDetail/${id}`);
        }}
      >
        <S.TextContainer>
          <S.Head>
            <p>오늘의 뉴스</p>
            <S.Tags>
              <Tag color="gray" size="large">
                {`${category} > ${subcategory}`}
              </Tag>
              <Tag color="gray" size="large">
                {keyword}
              </Tag>
            </S.Tags>
          </S.Head>
          <S.Title>{title}</S.Title>
        </S.TextContainer>
        <S.Quiz>
          <Tag color="purple" size="large">
            O/X 퀴즈
          </Tag>
          Q. {quiz}
        </S.Quiz>
      </S.Container>
      {index !== undefined && (
        <S.Navigation>
          <LeftArrowIcon onClick={onPrevious} />
          {index + 1} / 5
          <img src={isPaused ? PlayIcon : PauseIcon} alt="멈춤" onClick={onPaused} />
          <RightArrowIcon onClick={onNext} />
        </S.Navigation>
      )}
    </S.HeadNews>
  );
};

export default HeadNews;
