import { useRef, useState } from 'react';
import * as S from './ThinkingPart.Style';
import AfterThinking from './AfterThinking';
import { useParams } from 'react-router-dom';
import Loading from '../../common/Loading/Loding';
import { sendInsight } from '../../../api/NewsDetail';

interface ThinkingPartProps {
  topic: string;
  userComment: string | null;
  aiComment: string | null;
  pros: string | null;
  cons: string | null;
  neutral: string | null;
  onCommentUpdated: () => void;
}

const ThinkingPart = ({
  topic,
  userComment,
  aiComment,
  pros,
  cons,
  neutral,
  onCommentUpdated,
}: ThinkingPartProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [isError, setIsError] = useState(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;

    // 공백을 포함한 글자 수 계산
    if (newValue.length <= 300) {
      setInputValue(newValue);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const onSubmit = () => {
    if (inputValue === '') {
      inputRef.current?.focus();
      return;
    }
    handleClickSendButton(inputValue);
    setInputValue('');
  };

  const handleClickSendButton = async (input: string) => {
    setIsLoading(true);
    try {
      const isSuccess = await sendInsight(Number(id), input); // 데이터 저장 요청
      if (isSuccess) {
        onCommentUpdated(); // 저장 성공 시 서버 데이터 다시 가져오기
      }
    } catch (error) {
      console.error('오류 발생:', error);
    } finally {
      setIsLoading(false); // 로딩 상태 비활성화
    }
  };

  return (
    <S.Whole>
      <S.Topic>{topic}</S.Topic>
      {isLoading ? (
        <Loading message="다른 사람들의 의견을 정리하고 있어요" />
      ) : (
        <>
          {userComment ? (
            <AfterThinking
              thinkingContent={userComment}
              positiveContent={pros}
              neutralContent={neutral}
              negativeContent={cons}
              aiThinking={aiComment}
            />
          ) : (
            <>
              <S.TypingPart $isError={isError}>
                <S.InputPart
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="당신의 의견을 들려주세요."
                ></S.InputPart>
                <S.Info>
                  {isError && <S.ErrorMessage>300자를 초과할 수 없습니다.</S.ErrorMessage>}
                  <S.CurrentType $isError={isError}>{inputValue.length}/300</S.CurrentType>
                </S.Info>
              </S.TypingPart>
              <S.ButtonWrapper>
                <S.TypingButton onClick={onSubmit}>등록하기</S.TypingButton>
              </S.ButtonWrapper>
            </>
          )}
        </>
      )}
    </S.Whole>
  );
};

export default ThinkingPart;
