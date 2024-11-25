import Chip from './chip/Chip';
import * as S from './QuizAnswer.Style';
import OIcon from '../../../assets/icons/OIcon.svg?react';
import XIcon from '../../../assets/icons/XIcon.svg?react';

interface QuizAnswerProps {
  color: 'gray' | 'purple';
  answer: boolean;
  comment: string;
}

/**
 *
 * @param color - quizAnswer의 색깔 전달(gray, purple)
 * @param answer - 퀴즈의 정답
 * @param comment - 퀴즈의 해설
 * @returns
 */
const QuizAnswer = ({ color, answer, comment }: QuizAnswerProps) => {
  return (
    <S.QuizAnswer $color={color}>
      <S.Container>
        <Chip>정답</Chip>
        {answer ? <OIcon /> : <XIcon />}
      </S.Container>
      <S.Container>
        <Chip>해설</Chip>
        <S.Text>{comment}</S.Text>
      </S.Container>
    </S.QuizAnswer>
  );
};

export default QuizAnswer;
