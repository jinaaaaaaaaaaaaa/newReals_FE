import Tag from '../../../common/tag/Tag';
import * as S from './Item.Style';

interface ItemProps {
  category: string;
  percent: number;
}

const Item = ({ category, percent }: ItemProps) => {
  return (
    <S.Item>
      <Tag color="purple">{category}</Tag>
      <S.Text>
        지난달에 비해 {category} 뉴스에 대한 소비가 {Math.abs(percent)}%
        {percent > 0 ? '증가했어요!' : '감소했어요.'}
      </S.Text>
    </S.Item>
  );
};

export default Item;
