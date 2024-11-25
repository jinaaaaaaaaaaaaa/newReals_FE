import * as S from './Bublble.Style';

interface BubbleProps {
  isSelected: boolean;
  category: string;
  percent: number;
  onClick: () => void;
}

const Bubble = ({ isSelected, category, percent, onClick }: BubbleProps) => {
  return (
    <S.Bubble $isSelected={isSelected} onClick={onClick}>
      <S.Text>
        <p>{category}</p>
        <p>
          <S.Percent>{percent}</S.Percent>%
        </p>
      </S.Text>
    </S.Bubble>
  );
};

export default Bubble;
