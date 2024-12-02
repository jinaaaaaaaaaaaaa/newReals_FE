import * as S from './Quiz.Style';
import OStampIcon from '../../../../assets/icons/OStampIcon.svg';
import XStampIcon from '../../../../assets/icons/XStampIcon.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getQuiz } from '../../../../api/Profile';
import AnswerModal from '../../../newsDetail/quiz/AnswerModal';

interface QuizDataProps {
  answer: boolean;
  basenewsId: number;
  comment: string;
  problem: string;
  quizId: number;
  state: boolean | null;
}

const Quiz = () => {
  const [quizData, setQuizData] = useState<QuizDataProps[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<QuizDataProps | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const quizData = await getQuiz();
      if (quizData) {
        setQuizData(quizData);
      }
    };

    fetchData();
  }, []);

  const toggleModal = (quiz: QuizDataProps) => {
    if (!openModal) {
      setSelectedQuiz(quiz);
    } else {
      setSelectedQuiz(null);
    }
    setOpenModal((prev) => !prev);
  };
  return (
    <>
      <S.Container>
        <S.TextContianer>
          오늘의 퀴즈<S.SubText>퀴즈를 풀고 포인트를 적립하세요</S.SubText>
        </S.TextContianer>
        <S.Quiz>
          아직 풀지 않은 퀴즈는 해당 퀴즈 번호를 클릭해 퀴즈를 풀러 가요.
          <S.ItemContainer>
            {quizData.length > 0 ? (
              quizData.map((item, index) =>
                item.state === null ? (
                  <S.Unanswered
                    key={item.basenewsId}
                    onClick={() => {
                      navigate(`/newsDetail/${item.basenewsId}`);
                    }}
                  >
                    Q<S.Number>{index + 1}</S.Number>
                  </S.Unanswered>
                ) : (
                  <S.Icon
                    key={item.basenewsId}
                    src={item.state ? OStampIcon : XStampIcon}
                    alt="스탬프"
                    onClick={() => toggleModal(item)}
                  />
                ),
              )
            ) : (
              <div>로딩중</div>
            )}
          </S.ItemContainer>
        </S.Quiz>
      </S.Container>
      {openModal && selectedQuiz && (
        <AnswerModal
          onClose={() => toggleModal(selectedQuiz)}
          isCorrect={selectedQuiz.state === true}
          comment={selectedQuiz.comment}
          answer={selectedQuiz.answer}
        />
      )}
    </>
  );
};

export default Quiz;
