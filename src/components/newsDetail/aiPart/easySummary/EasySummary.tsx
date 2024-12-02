import { useMemo, useRef, useState } from 'react';
import * as S from './EasySummary.Style';
import InfoPart from './InfoPart';

interface EasySumProps {
  content: string;
  dictionary?: Record<string, string>;
  url: string;
}

/**
 *
 * @param content - 들어갈 내용 (쉬운 설명)
 * @param dictionary - 용어를 키로 하고 해설을 값으로 가진 객체
 * @param url - 원본 뉴스 url
 * @returns
 */

const EasySummary = ({ content, dictionary, url }: EasySumProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const termRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});
  const processedTerms = useRef(new Set<string>()); // 이미 처리된 용어를 추적

  const highlightedContent = useMemo(() => {
    if (!dictionary) return content;

    const terms = Object.keys(dictionary).sort((a, b) => b.length - a.length); // 긴 용어 우선 처리
    const termRegex = new RegExp(`(${terms.join('|')})`, 'g');
    processedTerms.current.clear(); // 새롭게 계산할 때마다 초기화

    const splitContent = content.split(termRegex);
    return splitContent.map((part, index) => {
      if (dictionary[part] && !processedTerms.current.has(part)) {
        // 아직 처리되지 않은 용어만 하이라이트
        processedTerms.current.add(part); // 처리된 용어로 추가
        return (
          <S.Highlight
            key={`${part}-${index}`}
            onClick={() => handleWordClick(part)}
            ref={(el) => {
              termRefs.current[part] = el; // 용어의 ref 저장
            }}
          >
            {part}
          </S.Highlight>
        );
      }
      return part; // 일반 텍스트 또는 중복된 용어
    });
  }, [content, dictionary, selectedTerm, isOpen]);

  const handleWordClick = (term: string) => {
    const rect = termRefs.current[term]?.getBoundingClientRect();
    if (rect) {
      setTooltipPosition({
        top: rect.bottom + window.scrollY, // 용어 바로 밑에 위치
        left: rect.left + rect.width / 2 + window.scrollX, // 용어 중앙에 맞추기
      });
    }
    if (selectedTerm === term) {
      setIsOpen((prev) => !prev); // 같은 단어면 토글
    } else {
      setSelectedTerm(term); // 다른 단어 선택
      setIsOpen(true); // 열기
    }
  };

  return (
    <S.EasySumPart>
      <S.ContentPart>{highlightedContent}</S.ContentPart>
      {isOpen && selectedTerm && dictionary && (
        <S.Tooltip $tooltipPosition={tooltipPosition}>
          <InfoPart info={dictionary[selectedTerm]} />
        </S.Tooltip>
      )}
      <S.Navi
        onClick={() => {
          window.open(url, '_blank');
        }}
      >
        원본 뉴스 보러 가기
        <S.Arrow />
      </S.Navi>
    </S.EasySumPart>
  );
};

export default EasySummary;
