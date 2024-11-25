import { MouseEvent } from 'react';
import Bookmark from '../bookmark/Bookmark';
import Tag from '../tag/Tag';
import * as S from './Card.Style';

interface CardProps {
  isSelected: boolean;
  imageUrl?: string;
  category: string;
  keyword: string;
  title: string;
  description: string;
  date: string;
  onClickBookmark: () => void;
  onClickCard: () => void;
}

/**
 *
 * @param isSelected - 북마크 유무를 알리는 state
 * @param imageUrl - (optional) 이미지가 있는 경우에만 전달
 * @param category - 뉴스 카테고리
 * @param keyword - 뉴스 키워드
 * @param title - 뉴스 제목
 * @param description - 뉴스 본문
 * @param date - 날짜
 * @param onClickBookmark - 북마크 버튼에 수행할 함수
 * @param onClickCard - 카드를 클릭하면 이동할 함수
 * @returns
 */
const Card = ({
  isSelected,
  imageUrl,
  category,
  keyword,
  title,
  description,
  date,
  onClickBookmark,
  onClickCard,
}: CardProps) => {
  const isImageUrl = !!imageUrl;

  const handleClickBookmark = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClickBookmark();
  };

  return isImageUrl ? (
    <S.ImageCard onClick={onClickCard}>
      <S.Image src={imageUrl} alt="기사 이미지" />
      <S.Bookmark>
        <Bookmark isSelected={isSelected} onClick={handleClickBookmark} />
      </S.Bookmark>
      <S.Content>
        <S.Category>
          <Tag color="purple" size="small">
            {category}
          </Tag>
          <S.Keyword>{keyword}</S.Keyword>
        </S.Category>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
      </S.Content>
    </S.ImageCard>
  ) : (
    <S.Card onClick={onClickCard}>
      <S.Content>
        <S.CardHeader>
          <S.Category>
            <Tag color="purple" size="small">
              {category}
            </Tag>
            <S.Keyword>{keyword}</S.Keyword>
          </S.Category>
          <Bookmark isSelected={isSelected} onClick={handleClickBookmark} />
        </S.CardHeader>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
      <S.Date>{date}</S.Date>
    </S.Card>
  );
};

export default Card;
