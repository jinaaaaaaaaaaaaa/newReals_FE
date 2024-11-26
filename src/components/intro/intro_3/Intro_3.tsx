import IntroContent from '../IntroContent';
import * as S from './Intro_3.Style';

const Intro_3 = () => {
  return (
    <S.ThirdIntro>
      <IntroContent
        firstComment="맞춤 뉴스 추천"
        secondComment="나한테 딱 맞는 뉴스를 <br/> newREALs가 추천해줘요"
        thirdComment="회원가입 시 정치, 경제, 사회 > 소주제 키워드를 골라 <br/> 홈에서 맞춤형 뉴스를 추천받을 수 있어요."
      />
      <S.ImgPart></S.ImgPart>
    </S.ThirdIntro>
  );
};

export default Intro_3;
