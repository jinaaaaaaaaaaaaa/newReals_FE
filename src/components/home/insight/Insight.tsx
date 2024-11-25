import * as S from './Insight.Style';
import Item from './Item';

const MOCK_DATA = [
  {
    category: '사회',
    title: '우리나라 무역 강화',
    newsId: 1,
  },
  {
    category: '사회',
    title: '우리나라 무역 강화',
    newsId: 2,
  },
  {
    category: '사회',
    title: '우리나라 무역 강화',
    newsId: 3,
  },
  {
    category: '사회',
    title: '우리나라 무역 강화',
    newsId: 4,
  },
  {
    category: '사회',
    title: '우리나라 무역 강화',
    newsId: 5,
  },
];

const Insight = () => {
  return (
    <S.Container>
      <S.TextContainer>
        <S.Text>오늘의 인사이트</S.Text>
        <S.Description>
          newREALs에서 선정한 인사이트 5개를 확인하고 나의 의견도 적으러 가볼까요?
        </S.Description>
      </S.TextContainer>
      <S.Insight>
        {MOCK_DATA.map((item) => (
          <Item
            key={item.newsId}
            category={item.category}
            title={item.title}
            newsId={item.newsId}
          />
        ))}
      </S.Insight>
    </S.Container>
  );
};

export default Insight;
