import QuizAnswer from '../../common/quizAnswer/QuizAnswer';
import * as S from './Quiz.Style';
import OIcon from '../../../assets/icons/OIcon.svg?react';
import XIcon from '../../../assets/icons/XIcon.svg?react';
import { useEffect, useState } from 'react';
import AnswerModal from './AnswerModal';
import { useParams } from 'react-router-dom';
import { sendQuizAnswer } from '../../../api/NewsDetail';

interface Quiz {
  quiz: string;
  isSolved: boolean;
  answer: boolean;
  comment: string;
  onCommentUpdated: () => void;
}

//@TODO
// 백엔드 API 명세서 보고 quiz 정보를 여기서 가져올지 상위 컴포넌트에서 가져올지 고민해야함!

/**
 *
 * @param quiz - 퀴즈 내용
 * @param isSolved - 퀴즈를 풀었는지의 유무
 * @param answer - 퀴즈의 정답
 * @param comment - 퀴즈의 해설
 * @returns
 */

const Quiz = ({ quiz, isSolved, answer, comment, onCommentUpdated }: Quiz) => {
  const [timeLeft, setTimeLeft] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const next6AM = new Date(now);
      next6AM.setHours(6, 0, 0, 0); // 오늘 새벽 6시 설정

      if (now.getHours() >= 6) {
        // 만약 현재 시간이 6시 이후라면 내일 새벽 6시로 설정
        next6AM.setDate(now.getDate() + 1);
      }

      const diff = next6AM.getTime() - now.getTime(); // 남은 시간 계산 (ms 단위)

      // 밀리초를 시간, 분, 초로 변환
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}시간 ${minutes}분 ${seconds}초`);
    };

    calculateTimeLeft(); // 처음 실행 시 남은 시간 계산

    const interval = setInterval(() => {
      calculateTimeLeft(); // 1초마다 업데이트
    }, 1000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 해제
  }, []);

  const handleModal = () => {
    setIsOpen((prev) => {
      // 모달이 닫히는 시점에서만 렌더링 트리거
      if (prev) {
        onCommentUpdated(); // 렌더링 트리거
      }
      return !prev;
    });
  };

  const handleAnswerClick = async (userAnswer: boolean) => {
    handleModal();
    answer === userAnswer ? setIsCorrect(true) : setIsCorrect(false);
    sendQuizAnswer(Number(id), userAnswer);
  };

  return (
    <S.Container>
      <S.Quiz>
        <S.Q>Q.&nbsp;</S.Q> 오늘의 퀴즈
        <S.Timer>
          <S.Time>{timeLeft}</S.Time> 후에 사라져요!
        </S.Timer>
      </S.Quiz>
      <S.Content>
        <S.Text>{quiz}</S.Text>
        {isSolved ? (
          <QuizAnswer color="purple" answer={answer} comment={comment} />
        ) : (
          <>
            <S.ButtonContainer>
              <S.Button onClick={() => handleAnswerClick(true)} $buttonStyle="left">
                <OIcon />
              </S.Button>
              <S.Button onClick={() => handleAnswerClick(false)} $buttonStyle="right">
                <XIcon />
              </S.Button>
            </S.ButtonContainer>
            {isOpen && (
              <AnswerModal
                isCorrect={isCorrect}
                answer={answer}
                comment={comment}
                onClose={handleModal}
              />
            )}
          </>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Quiz;
