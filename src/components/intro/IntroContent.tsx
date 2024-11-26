import * as S from './IntroContent.Style';

interface ContentProps {
  firstComment: string;
  secondComment: string;
  thirdComment: string;
}

/**
 *
 * @param firstComment - 담을 내용의 소제목 (각 intro 파트 중 보라색 작은 글씨)
 * @param secondComment - 각 intro 파트의 주요 내용 (크고 두꺼운 글씨)
 * @param thirdComment - 각 intro 파트의 상세 내용 (그 아래 작은 글씨)
 * @returns
 */
const IntroContent = ({ firstComment, secondComment, thirdComment }: ContentProps) => {
  return (
    <S.MentPart>
      <S.FirstMent dangerouslySetInnerHTML={{ __html: firstComment }} />
      <S.SecondMent dangerouslySetInnerHTML={{ __html: secondComment }} />
      <S.ThirdMent dangerouslySetInnerHTML={{ __html: thirdComment }} />
    </S.MentPart>
  );
};

export default IntroContent;
