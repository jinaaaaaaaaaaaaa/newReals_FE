import Item from './Item';
import * as S from './Trend.Style';

const Trend = () => {
  return (
    <S.Container>
      <S.Title>관심 변화 트렌드</S.Title>
      <S.Trend>
        <S.Description>
          이번 11월, 뉴스님은 사회 분야에 가장 큰 관심을 보였어요. 특히, 전세사기와 같은 주거 안정
          문제와 강력 범죄 관련 이슈에 대해 높은 참여을 보였어요. 경제 분야에서도 일부 관심이
          있었지만, 생활과 직접적으로 연관된 사회적 문제에 대한 관심이 가장 두드러졌어요.
        </S.Description>
        <S.ItemContainer>
          <Item category="정치" percent={20} />
          <Item category="정치" percent={-20} />
          <Item category="정치" percent={20} />
        </S.ItemContainer>
      </S.Trend>
    </S.Container>
  );
};

export default Trend;
