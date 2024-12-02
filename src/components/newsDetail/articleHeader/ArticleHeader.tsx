import { useState } from 'react';
import Bookmark from '../../common/bookmark/Bookmark';
import Tag from '../../common/tag/Tag';
import EmojiCount from '../emojiCount/EmojiCount';
import * as S from './ArticleHeader.Style';
import { postScrap } from '../../../api/Scrap';

interface ArticleHeadProps {
  id: number;
  category: string;
  subCategory: string;
  keyword: string;
  title: string;
  date: string;
  count: number;
  isScrapped: boolean;
}

const ArticleHeader = ({
  id,
  category,
  subCategory,
  keyword,
  title,
  date,
  count,
  isScrapped,
}: ArticleHeadProps) => {
  const [isSelected, setIsSelected] = useState(isScrapped);

  const handleSelected = async () => {
    try {
      const success = await postScrap(id); // 스크랩 등록/해제 API 호출
      if (success !== null) {
        setIsSelected(success); // 성공적으로 변경된 상태 반영
      }
    } catch (error) {
      console.error('스크랩 실패:', error);
    }
  };

  return (
    <S.ArticleHead>
      <S.CategoryPart>
        <Tag children={`${category} > ${subCategory}`} color="purple" size="large" /># {keyword}
      </S.CategoryPart>
      <S.TitlePart>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
      </S.TitlePart>
      <S.MyPart>
        <EmojiCount count={count} isActive={true} />
        <Bookmark type="article" isSelected={isSelected} onClick={handleSelected} />
      </S.MyPart>
    </S.ArticleHead>
  );
};

export default ArticleHeader;
