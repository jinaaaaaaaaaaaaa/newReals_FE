import Tag from '../../common/tag/Tag';
import * as S from './AfterThinking.Style';

interface ThinkingProps {
  thinkingContent: string;
  positiveContent: string | null;
  neutralContent: string | null;
  negativeContent: string | null;
  aiThinking: string | null;
}

const AfterThinking = ({
  thinkingContent,
  positiveContent,
  neutralContent,
  negativeContent,
  aiThinking,
}: ThinkingProps) => {
  const OthersPart = [
    { id: 1, part: '긍정', color: 'purple', content: positiveContent },
    { id: 2, part: '중립', color: 'gray_thinking', content: neutralContent },
    { id: 3, part: '부정', color: 'red', content: negativeContent },
  ];

  return (
    <S.AfterThinking>
      <S.MyThinking>
        <Tag children="나의 의견" color="purple" size="small" />
        <S.MyThinkingContent>{thinkingContent}</S.MyThinkingContent>
      </S.MyThinking>
      <S.OthersThinking>
        {aiThinking ? (
          <>
            <S.ContentTitle>의견을 아직 모으고 있어요! 제가 대신 답변해 드릴게요.</S.ContentTitle>
            <S.OthersPart>
              <S.OthersContent $noBorder={true}>
                <Tag color="purple" size="small">
                  AI 의견
                </Tag>
                <S.OthersThinkingContent>{aiThinking}</S.OthersThinkingContent>
              </S.OthersContent>
            </S.OthersPart>
          </>
        ) : (
          <>
            <S.ContentTitle>다른 사람들은 이렇게 생각해요.</S.ContentTitle>
            <S.OthersPart>
              {OthersPart.map((other, index) => (
                <S.OthersContent key={other.id} $noBorder={index === OthersPart.length - 1}>
                  <Tag color={other.color as 'gray_thinking' | 'purple' | 'red'} size="small">
                    {other.part}
                  </Tag>
                  <S.OthersThinkingContent>{other.content}</S.OthersThinkingContent>
                </S.OthersContent>
              ))}
            </S.OthersPart>
          </>
        )}
      </S.OthersThinking>
    </S.AfterThinking>
  );
};

export default AfterThinking;
