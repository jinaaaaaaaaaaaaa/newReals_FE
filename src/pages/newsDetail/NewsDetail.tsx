import { useState } from 'react';
import AnswerModal from '../../components/newsDetail/quiz/AnswerModal';
import EmojiPart from '../../components/newsDetail/emojipart/EmojiPart';
import ArticleHeader from '../../components/newsDetail/articleHeader/ArticleHeader';
import * as S from './NewsDetail.Style';
import AIPart from '../../components/newsDetail/aiPart/AIPart';
import PageButton from '../../components/common/button/PageButton';
import Quiz from '../../components/newsDetail/quiz/Quiz';
import PoliticsImg1 from '../../assets/images/PoliticsImg1.png';
import ThinkingPart from '../../components/newsDetail/thinkingPart/ThinkingPart';

const MOCKDATA = {
  id: 1,
  category: '정치',
  subCategory: '행정',
  keyword: '키워드',
  date: '2024-11-10',
  title: '집값 상승에 가계 여유자금 줄어... 예금보다 부동산에 투자 늘어...1',
  count: 46,
  img: PoliticsImg1,
  content:
    '윤석열 대통령은 필리핀을 국빈 방문해 무역, 투자, 공급망, 에너지 등 다양한 분야에서 협력을 강화하겠다고 했어요. 그는 필리핀과의 관계 발전이 동포 사회에 이익이 될 것이라고 했고, 필리핀 대통령과 정상회담을 열어 양국 간 협력을 논의할 예정이에요. 또한, 비즈니스 포럼을 개최하고, 싱가포르와 라오스를 순방해 아세안 정상회의에 참석할 계획이에요. 윤석열 대통령은 필리핀을 국빈 방문해 무역, 투자, 공급망, 에너지 등 다양한 분야에서 협력을 강화하겠다고 했어요. 그는 필리핀과의 관계 발전이 동포 사회에 이익이 될 것이라고 했고, 필리핀 대통령과 정상회담을 열어 양국 간 협력을 논의할 예정이에요. 또한, 비즈니스 포럼을 개최하고, 싱가포르와 라오스를 순방해 아세안 정상회의에 참석할 계획이에요.',
  dictionary: {
    필리핀: '저도몰라요',
    국빈: '국제적으로 머..암튼 그런거에요랄라라라라라라국빈국빈국빈해요',
    포럼: '안녕하세요저는김진아포럼은영어포도포도포도포럼포럼해요 이 문맥에서는 이게 이런 뜻이고 이런 말이에요',
  },
  url: 'https://www.breaknews.com/1060642',
  topic: '"우리나라 무역 강화"에 대해 어떻게 생각하시나요?',
  quiz: '가계의 순자금운용이 줄어든 이유는 주택담보대출 등 금융 기관 차입이 감소했기 때문이다.',
  comment: '이게해설이에요',
  left: '북한 오물풍선',
  right: '의료 대란 논의',
};

const NewsDetail = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <S.NewsDetail>
      <ArticleHeader
        category={MOCKDATA.category}
        subCategory={MOCKDATA.subCategory}
        keyword={MOCKDATA.keyword}
        title={MOCKDATA.title}
        date={MOCKDATA.date}
        count={MOCKDATA.count}
      />
      <S.Content>
        <S.NewsPart>
          <S.NewsImg src={MOCKDATA.img} />
          <AIPart />
          {MOCKDATA.topic ? <ThinkingPart topic={MOCKDATA.topic} /> : <EmojiPart />}
          <button onClick={handleModal}>Show Answer Modal</button>
          {isOpen && <AnswerModal isCorrect={true} onClose={handleModal} />}
          <S.PageNavigate>
            <PageButton children={MOCKDATA.left} buttonStyle="left" />
            <PageButton children={MOCKDATA.right} buttonStyle="right" />
          </S.PageNavigate>
        </S.NewsPart>
        {MOCKDATA.quiz && (
          <S.QuizPart>
            <Quiz quiz={MOCKDATA.quiz} isSolved={false} answer={true} comment={MOCKDATA.comment} />
          </S.QuizPart>
        )}
      </S.Content>
    </S.NewsDetail>
  );
};

export default NewsDetail;
