import * as S from './EmojiPart.Style';
import GoodEmoji from '../../../assets/icons/GoodEmoji.svg';
import HeartEmoji from '../../../assets/icons/HeartEmoji.svg';
import AngryEmoji from '../../../assets/icons/AngryEmoji.svg';
import IconPart from './IconPart';
import { useState } from 'react';

const ICONS = [
  { id: 1, imoji: GoodEmoji, content: '좋아요', count: 52 },
  { id: 2, imoji: HeartEmoji, content: '공감해요', count: 54 },
  { id: 3, imoji: AngryEmoji, content: '화나요', count: 0 },
];

const EmojiPart = () => {
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>(
    ICONS.reduce((acc, icon) => ({ ...acc, [icon.id]: icon.count ?? 0 }), {}),
  );

  const handleIconClick = (id: number) => {
    setSelectedIcon((prev) => {
      // 이전 선택된 이모지가 있다면, 카운트를 감소시킵니다
      if (prev !== null) {
        setLikeCounts((counts) => ({
          ...counts,
          [prev]: counts[prev] - 1,
        }));
      }
      // 새로 선택된 이모지가 같으면 선택 해제, 다르면 카운트 증가
      if (prev === id) {
        return null;
      } else {
        setLikeCounts((counts) => ({
          ...counts,
          [id]: counts[id] + 1,
        }));
        return id;
      }
    });
  };

  return (
    <S.EmojiClickPart>
      이 기사에 대해 어떻게 생각하시나요?
      <S.MainPart>
        <S.ClickPart>
          {ICONS.map((icon) => (
            <IconPart
              key={icon.id}
              src={icon.imoji}
              content={icon.content}
              count={likeCounts[icon.id]}
              isSelected={selectedIcon === icon.id}
              onClick={() => handleIconClick(icon.id)}
            />
          ))}
        </S.ClickPart>
      </S.MainPart>
    </S.EmojiClickPart>
  );
};

export default EmojiPart;
