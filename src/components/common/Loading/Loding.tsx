import * as S from './Loading.Style';

const Loading: React.FC<{ message?: string }> = ({ message = '인증 진행 중입니다...' }) => (
  <S.LoadingContainer>
    <S.Loader />
    <S.Message>{message}</S.Message>
  </S.LoadingContainer>
);

export default Loading;
