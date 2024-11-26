import IntroContent from '../IntroContent';
import * as S from './Intro_7.Style';

const Intro_7 = () => {
  return (
    <S.SeventhIntro>
      <IntroContent
        firstComment="마이페이지 > 나의 관심 뉴스 분석"
        secondComment="내가 현재 관심 있는 <br/>뉴스는 어떤 분야일까요?"
        thirdComment="내가 지금까지 본 뉴스 주제를 분석해 관심 있었던 뉴스에 <br/>대해 다시 생각해 볼 수 있어요. 퀴즈 진행도 & 출석 현황도 <br/>함께 확인해요!"
      />
    </S.SeventhIntro>
  );
};

export default Intro_7;
