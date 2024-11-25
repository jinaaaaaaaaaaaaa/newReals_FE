import IntroContent from '../IntroContent';
import * as S from './Intro_5.Style';

const Intro_5 = () => {
  return (
    <S.FifthIntro>
      <IntroContent
        firstComment="뉴스 상세 > AI 요약"
        secondComment="AI 뉴스 요약으로<br/> 초보자도 쉽게 읽을 수 있도록 도와요"
        thirdComment="각 뉴스마다 AI가 간단히 내용을 요약해주고 <br/>아래에서 뉴스에 대한 자세한 정보도 확인할 수 있어요."
      />
    </S.FifthIntro>
  );
};

export default Intro_5;
