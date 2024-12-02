import * as S from './EmojiPart.Style';
import GoodEmoji from '../../../assets/icons/GoodEmoji.svg';
import HeartEmoji from '../../../assets/icons/HeartEmoji.svg';
import AngryEmoji from '../../../assets/icons/AngryEmoji.svg';
import IconPart from './IconPart';
import { useEffect, useState } from 'react';
import { sendLikes } from '../../../api/NewsDetail';

interface EmojiProps {
  id: number;
  action: number;
  good: number;
  bad: number;
  interesting: number;
}

const EmojiPart = ({ id, action, good, bad, interesting }: EmojiProps) => {
  const ICONS = [
    { id: 0, imoji: GoodEmoji, content: '좋아요' },
    { id: 1, imoji: HeartEmoji, content: '공감해요' },
    { id: 2, imoji: AngryEmoji, content: '화나요' },
  ];
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>({
    0: 0,
    1: 0,
    2: 0,
  });

  useEffect(() => {
    setSelectedIcon(action); // 선택된 이모지 초기화
    setLikeCounts({
      0: good,
      1: interesting,
      2: bad,
    });
  }, [id, action, good, bad, interesting]);

  const handleClickLikeButton = async (selectedId: number) => {
    try {
      const isSuccess = await sendLikes(Number(id), selectedId);
      if (isSuccess) {
        setLikeCounts((counts) => {
          const updatedCounts = { ...counts };
          if (selectedIcon !== null) {
            updatedCounts[selectedIcon] -= 1;
          }
          if (selectedIcon !== selectedId) {
            updatedCounts[selectedId] += 1;
            setSelectedIcon(selectedId);
          } else {
            setSelectedIcon(null);
          }
          return updatedCounts;
        });
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
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
              onClick={() => handleClickLikeButton(icon.id)}
            />
          ))}
        </S.ClickPart>
      </S.MainPart>
    </S.EmojiClickPart>
  );
};

export default EmojiPart;
