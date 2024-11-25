import Keyword from './Keyword';
import * as S from './KeywordList.Style';

const MOCK_DATA = ['키워드', '키워드', '키워드', '키워드', '키워드'];

const KeywordList = () => {
  return (
    <S.Cotainer>
      <S.Title>뉴스님을 위한 키워드 추천</S.Title>
      <S.Content>
        다음 달은 비교적 다른 카테고리보다 소비가 적었던 정치 카테고리의 키워드로 수정해보는건
        어때요?
        <S.Keywords>
          {MOCK_DATA.map((keyword, index) => (
            <Keyword key={index} keyword={keyword} />
          ))}
        </S.Keywords>
      </S.Content>
    </S.Cotainer>
  );
};

export default KeywordList;
