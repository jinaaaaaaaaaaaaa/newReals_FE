import * as S from './EmojiCount.Style';
import EmojiesIcon from '../../../assets/icons/EmojiesIcon.svg';

interface EmojiCountProps {
  count: number;
  isActive: boolean;
}

/**
 *
 * @param count - emoji의 수
 * @param isActive - 유저가 emoji를 남겼는지 유무
 * @returns
 */
const EmojiCount = ({ count, isActive }: EmojiCountProps) => {
  return (
    <S.Container $isActive={isActive}>
      <img src={EmojiesIcon} alt="이모지들" />
      {count}
    </S.Container>
  );
};

export default EmojiCount;
