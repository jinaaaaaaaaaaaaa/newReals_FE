import IntroContent from '../IntroContent';
import * as S from './Intro_4.Style';

const Intro_4 = () => {
  return (
    <S.FourthIntro>
      <IntroContent
        firstComment="메인 홈 > 오늘의 뉴스"
        secondComment="내가 골랐던 키워드의 <br/>뉴스를 제공받아 읽어요."
        thirdComment="키워드를 바탕으로 newREALs가 제공하는 뉴스를 확인하고<br/> 네 컷 만화로 뉴스를 더 쉽고 재미있게 읽어봐요!"
      />
    </S.FourthIntro>
  );
};

export default Intro_4;
