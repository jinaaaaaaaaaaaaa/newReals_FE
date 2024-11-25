import Tag from '../../common/tag/Tag';
import * as S from './Intro_2.Style';

const TagProps = [
  '뉴스 큐레이션',
  '맞춤형 뉴스의 새로운 기준',
  '키워드를 선택하고 관심 기사만 쏙쏙 모아보기',
  '간편하게 선택하고, 중요한 정보만 한눈에!',
];

const Intro_2 = () => {
  return (
    <S.SecondIntro>
      newReal에서 맞춤형 뉴스를 추천받아요!
      <S.Tag>
        {TagProps.map((item, index) => (
          <Tag key={index} children={`# ${item}`} color="purple" size="large" />
        ))}
      </S.Tag>
    </S.SecondIntro>
  );
};

export default Intro_2;
