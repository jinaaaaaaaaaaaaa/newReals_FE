import * as S from './InfoPart.Style';

interface Information {
  info: string;
}

const InfoPart = ({ info }: Information) => {
  return <S.Info>{info}</S.Info>;
};

export default InfoPart;
