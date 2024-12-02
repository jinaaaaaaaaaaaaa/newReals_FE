import * as S from './Kewyord.Style';

interface KeywordProps {
  keyword: string;
}

const Keyword = ({ keyword }: KeywordProps) => {
  return <S.Keyword># {keyword}</S.Keyword>;
};

export default Keyword;
