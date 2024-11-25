import * as S from './AISummary.Style';
import DownArrowIcon from '../../../../assets/icons/DownArrowIcon.svg';
import UpArrowIcon from '../../../../assets/icons/UpArrowIcon.svg';
import { useState } from 'react';

interface AISummary {
  content: string;
}

/**
 *
 * @param content - AI 요약 안의 글씨
 * @returns
 */
const AISummary = ({ content }: AISummary) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.AIPart>
      <S.FixedPart>
        <S.PartName>AI 요약 보기</S.PartName>
        <S.ToggleImg
          onClick={handleToggle}
          src={isOpen ? UpArrowIcon : DownArrowIcon}
          alt="토글 버튼"
        />
      </S.FixedPart>
      {isOpen && <S.Content>{content}</S.Content>}
    </S.AIPart>
  );
};

export default AISummary;
