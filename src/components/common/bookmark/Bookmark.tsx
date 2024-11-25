import { MouseEvent } from 'react';
import * as S from './Bookmark.Style';
import BookmarkIcon from '../../../assets/icons/BookmarkIcon.svg';
import BookmarkActiveIcon from '../../../assets/icons/BookmarkActiveIcon.svg';

interface BookmarkProps {
  type?: 'article' | 'else';
  isSelected: boolean;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

/**
 *
 * @param type - 기사 상세페이지일 경우 'article', 이외에는 모두 'else' 선택 -> 크기 달라짐
 * @param isSelected - true일 경우 북마크가 된 것임
 * @param onClick - 북마크 버튼을 누르면 수행할 함수
 * @returns
 */
const Bookmark = ({ type = 'else', isSelected, onClick }: BookmarkProps) => {
  return (
    <S.Bookmark $type={type} onClick={onClick}>
      <S.Icon $type={type} src={isSelected ? BookmarkActiveIcon : BookmarkIcon} alt="bookmark" />
    </S.Bookmark>
  );
};

export default Bookmark;
