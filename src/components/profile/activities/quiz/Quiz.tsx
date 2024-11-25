import * as S from './Quiz.Style';
import OStampIcon from '../../../../assets/icons/OStampIcon.svg';
import XStampIcon from '../../../../assets/icons/XStampIcon.svg';
import { useNavigate } from 'react-router-dom';

const quizs = [
  { id: 1, state: 'correct' },
  { id: 2, state: 'unanswered' },
  { id: 3, state: 'correct' },
  { id: 4, state: 'unanswered' },
  { id: 5, state: 'incorrect' },
];

//@TODO 푼 퀴즈 클릭했을 때 모달 띄우는 것!

const Quiz = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.TextContianer>
        오늘의 퀴즈<S.SubText>퀴즈를 풀고 포인트를 적립하세요</S.SubText>
      </S.TextContianer>
      <S.Quiz>
        아직 풀지 않은 퀴즈는 해당 퀴즈 번호를 클릭해 퀴즈를 풀러 가요.
        <S.ItemContainer>
          {quizs.map((item) =>
            item.state === 'unanswered' ? (
              <S.Unanswered
                key={item.id}
                onClick={() => {
                  navigate(`/newsDetail/${item.id}`);
                }}
              >
                Q<S.Number>{item.id}</S.Number>
              </S.Unanswered>
            ) : (
              <S.Icon
                key={item.id}
                src={item.state === 'correct' ? OStampIcon : XStampIcon}
                alt="스탬프"
              />
            ),
          )}
        </S.ItemContainer>
      </S.Quiz>
    </S.Container>
  );
};

export default Quiz;
