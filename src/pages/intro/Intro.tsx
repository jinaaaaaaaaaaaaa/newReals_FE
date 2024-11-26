import Intro_1 from '../../components/intro/intro_1/Intro_1';
import Intro_3 from '../../components/intro/intro_3/Intro_3';
import Intro_4 from '../../components/intro/intro_4/Intro_4';
import Intro_5 from '../../components/intro/intro_5/Intro_5';
import Intro_6 from '../../components/intro/intro_6/Intro_6';
import Intro_7 from '../../components/intro/intro_7/Intro_7';
import KakaoLogin from '../../components/intro/kakaoLogin/KakaoLogin';
import Intro_2 from './../../components/intro/intro_2/Intro_2';

const Intro = () => {
  return (
    <div>
      <Intro_1 />
      <Intro_2 />
      <Intro_3 />
      <Intro_4 />
      <Intro_5 />
      <Intro_6 />
      <Intro_7 />
      <KakaoLogin />
    </div>
  );
};

export default Intro;
