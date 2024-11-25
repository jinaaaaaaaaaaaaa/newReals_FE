import * as S from './IconPart.Style';

interface IconPartProps {
  src: string;
  content: string;
  count: number;
  isSelected: boolean;
  onClick: () => void;
}

/**
 *
 * @param src - 이미지 경로
 * @param content - 이모지 멘트
 * @param count - 각 이모지 카운트 수
 * @param isSelected - 선택된 이모지라면 true
 * @param onClick - 클릭하면 실행할 함수
 * @returns
 */

const IconPart = ({ src, content, count, isSelected, onClick }: IconPartProps) => {
  return (
    <S.Whole onClick={onClick}>
      <S.EmojiPart $isClicked={isSelected} src={src} alt="아이콘" />
      <S.ContentPart>
        <S.Content $isClicked={isSelected}>{content}</S.Content>
        <S.Count $isClicked={isSelected}>{count}</S.Count>
      </S.ContentPart>
    </S.Whole>
  );
};

export default IconPart;
