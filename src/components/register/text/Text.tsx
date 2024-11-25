import * as S from './Text.Style';

interface TextProps {
  nickname: string;
}

/**
 *
 * @param nickname - 유저 이름
 * @returns
 */
const Text = ({ nickname }: TextProps) => {
  return (
    <S.Container>
      <S.Title>
        {`${nickname}의 관심 키워드를 선택해주세요 :-)`}
        <S.HelperText>최대 5개까지 선택 가능</S.HelperText>
      </S.Title>
      <S.Description>
        {`키워드를 선택하면 ${nickname}님만의 맞춤 뉴스가 제공돼요! 키워드는 마이페이지 > 관심 키워드 수정에서 언제든지 수정할 수 있어요.`}
      </S.Description>
    </S.Container>
  );
};

export default Text;
