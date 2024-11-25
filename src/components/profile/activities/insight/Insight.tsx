import * as S from './Insight.Style';
import Item from './Item';

const MOCK_DATA = [
  {
    title: '대한민국 무역 투자 강화하기',
    comment:
      '무역 투자 강화는 국내 기업의 글로벌 경쟁력을 높이고 경제 성장을 촉진하는데 중요해요. 중요해요',
    id: 1,
  },
  {
    title: '대한민국 무역 투자 강화하기',
    comment:
      '무역 투자 강화는 국내 기업의 글로벌 경쟁력을 높이고 경제 성장을 촉진하는데 중요해요. 중요해요',
    id: 2,
  },
  {
    title: '대한민국 무역 투자 강화하기',
    comment:
      '무역 투자 강화는 국내 기업의 글로벌 경쟁력을 높이고 경제 성장을 촉진하는데 중요해요. 중요해요',
    id: 3,
  },
  {
    title: '대한민국 무역 투자 강화하기',
    comment:
      '무역 투자 강화는 국내 기업의 글로벌 경쟁력을 높이고 경제 성장을 촉진하는데 중요해요. 중요해요',
    id: 4,
  },
];

const Insight = () => {
  return (
    <S.Container>
      <S.Text>나의 인사이트</S.Text>
      <S.Insight>
        {MOCK_DATA.map((item) => (
          <Item key={item.id} title={item.title} comment={item.comment} id={item.id} />
        ))}
      </S.Insight>
    </S.Container>
  );
};

export default Insight;
