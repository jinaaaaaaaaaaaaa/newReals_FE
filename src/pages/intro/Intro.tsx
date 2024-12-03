import * as S from './Intro.Style';
import CommonLayout from '../../components/intro/layout/CommonLayout';
import Intro_1 from '../../components/intro/intro1/Intro_1';
import Intro_2 from '../../components/intro/intro2/Intro_2';
import IntroImg3 from '../../assets/images/IntroImg3.png';
import IntroImg4 from '../../assets/images/IntroImg4.png';
import IntroImg5 from '../../assets/images/IntroImg5.png';
import IntroImg6 from '../../assets/images/IntroImg6.png';
import IntroImg7 from '../../assets/images/IntroImg7.png';
import KakaoLogin from '../../components/intro/kakaoLogin/KakaoLogin';

const commonLayouts = [
  {
    firstComment: '맞춤 뉴스 추천',
    secondComment: '나한테 딱 맞는 뉴스를 <br/> newREALs가 추천해줘요',
    thirdComment:
      '회원가입 시 정치, 경제, 사회 > 소주제 키워드를 골라 <br/> 홈에서 맞춤형 뉴스를 추천받을 수 있어요.',
    img: IntroImg3,
    direction: 'left',
  },
  {
    firstComment: '뉴스 상세 > AI 요약',
    secondComment: 'AI 뉴스 요약으로 <br/>초보자도 쉽게 읽을 수 있도록 도와요',
    thirdComment:
      '각 뉴스마다 AI가 간단히 내용을 요약해주고<br/>아래에서 뉴스에 대한 자세한 정보도 확인할 수 있어요.',
    img: IntroImg4,
    direction: 'right',
  },
  {
    firstComment: '뉴스 상세 > 오늘의 퀴즈',
    secondComment: '홈에서 뜨는 5개의 뉴스에 <br/>대한 퀴즈를 풀고 포인트를 획득해요!',
    thirdComment:
      '매일 선정되는 오늘의 뉴스 내용에 맞는 퀴즈를 풀 수 있어요. <br/>뉴스를 읽고 퀴즈를 맞춰 포인트를 모아 보세요!',
    img: IntroImg5,
    direction: 'left',
  },
  {
    firstComment: '뉴스 상세 > 오늘의 인사이트',
    secondComment: '헤드 뉴스에 대해 나의 의견을 공유하<br/>며 직접 참여해보세요!',
    thirdComment:
      '미리 제시된 토픽을 바탕으로 나만의 의견을 작성하고, 다른 <br/>사람들과 생각을 나눠보세요. 뉴스를 단순히 읽는 것을 넘어, <br/>직접 참여하며 새로운 관점을 얻어보세요!',
    img: IntroImg6,
    direction: 'right',
  },
  {
    firstComment: '마이페이지 > 관심 분석 레포트',
    secondComment: '한 달 동안 내가 활동했던 내역과 <br/>관심사를 돌아보세요',
    thirdComment:
      '한 달 동안 내가 가장 관심을 보였던 분야와 주요 활동 내용을<br/>요약해 보여줘요. 나의 뉴스 소비 패턴을 파악하고 추천 키워<br/>드를 받아보세요!',
    img: IntroImg7,
    direction: 'left',
  },
];

const Intro = () => {
  return (
    <S.IntroPage>
      <Intro_1 />
      <Intro_2 />
      {commonLayouts.map((layout, index) => (
        <CommonLayout
          key={index}
          firstComment={layout.firstComment}
          secondComment={layout.secondComment}
          thirdComment={layout.thirdComment}
          img={layout.img}
          direction={layout.direction as 'left' | 'right'}
        />
      ))}
      <KakaoLogin />
    </S.IntroPage>
  );
};

export default Intro;
