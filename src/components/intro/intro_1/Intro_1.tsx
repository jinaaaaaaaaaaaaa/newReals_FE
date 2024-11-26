import * as S from './Intro_1.Style';
import IntroImg1 from '../../../assets/images/IntroImg1.png';

const Intro_1 = () => {
  return (
    <S.FirstIntro>
      <div>
        <S.Slogan>
          REAL <S.Purple>NEWS,</S.Purple>
          <br />
          REAL <S.Purple>SIMPLE!</S.Purple>
        </S.Slogan>
        <S.Info>입문자를 위한 개인 맞춤형 뉴스 제공 플랫폼</S.Info>
      </div>
      <S.Img src={IntroImg1} />
    </S.FirstIntro>
  );
};

export default Intro_1;
