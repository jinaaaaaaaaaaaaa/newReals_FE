import IntroContent from './IntroContent';
import * as S from './CommonLayout.Style';

interface LayoutProps {
  firstComment: string;
  secondComment: string;
  thirdComment: string;
  img: string;
  direction: 'left' | 'right';
}

const CommonLayout = ({
  firstComment,
  secondComment,
  thirdComment,
  img,
  direction,
}: LayoutProps) => {
  const isLeft = direction === 'left';

  return (
    <S.IntroMent $isLeft={isLeft}>
      <IntroContent
        firstComment={firstComment}
        secondComment={secondComment}
        thirdComment={thirdComment}
      />
      <S.ImgPart src={img}></S.ImgPart>
    </S.IntroMent>
  );
};

export default CommonLayout;
