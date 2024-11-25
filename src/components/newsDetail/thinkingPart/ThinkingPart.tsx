import { useRef, useState } from 'react';
import * as S from './ThinkingPart.Style';
import AfterThinking from './AfterThinking';

interface ThinkingPartProps {
  topic: string;
}

/**
 *
 * @param topic - 생각정리
 * @returns
 */

const ThinkingPart = ({ topic }: ThinkingPartProps) => {
  const [isFinished, setIsFinished] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [isError, setIsError] = useState(false);
  const [thinkingContent, setThinkingContent] = useState<string | null>(null);
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
    setIsFinished(true);
  };

  const handleClickSendButton = (input: string) => {
    setThinkingContent(input);
  };

  return (
    <S.Whole>
      <S.Topic>{topic}</S.Topic>
      {isFinished ? (
        thinkingContent && (
          <AfterThinking
            thinkingContent={thinkingContent}
            positiveContent="백연결"
            neutralContent="백연결"
            negativeContent="백연결"
            //aiThinking="이렇게생각해요"
          />
        )
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
    </S.Whole>
  );
};

export default ThinkingPart;
