import IntroContent from '../IntroContent';
import * as S from './Intro_6.Style';

const Intro_6 = () => {
  return (
    <S.SixthIntro>
      <IntroContent
        firstComment="뉴스 상세 > 오늘의 퀴즈"
        secondComment="홈에서 뜨는 5개의 뉴스에 <br/>대한 퀴즈를 풀고 포인트를 획득해요!"
        thirdComment="매일 선정되는 오늘의 뉴스 내용에 맞는 퀴즈를 풀 수 있어요. <br/>뉴스를 읽고 퀴즈를 맞춰 포인트를 모아 보세요!"
      />
    </S.SixthIntro>
  );
};

export default Intro_6;
