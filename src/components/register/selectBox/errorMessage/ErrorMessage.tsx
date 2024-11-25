import * as S from './ErrorMessage.Sytle';
import ErrorIcon from '../../../../assets/icons/ErrorIcon.svg?react';

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <S.ErrorMessage>
      <ErrorIcon />
      <S.Text $isError={true}>{message}</S.Text>
    </S.ErrorMessage>
  );
};

export default ErrorMessage;
