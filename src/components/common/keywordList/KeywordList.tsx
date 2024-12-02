import * as S from './KeywordList.Style';
import Keyword from '../../common/keyword/Keyword';

interface KeywordListProps {
  list: string[];
  isActives: string[];
  onToggleKeyword: (keyword: string) => void;
  type?: 'register' | 'modal';
}

/**
 *
 * @param list - 키워드의 list
 * @param isActives - 선택된 키워드 배열
 * @onTogglekeyword - 키워드 클릭 시 수행할 함수
 * @type - (optional) 키워드 리스트를 사용하는 곳 : 'register' | 'modal'
 * @returns
 */
const KeywordList = ({ list, isActives, onToggleKeyword, type = 'register' }: KeywordListProps) => {
  return (
    <S.KeywordList $type={type}>
      {list.map((keyword) => {
        const isActive = isActives.includes(keyword);
        return (
          <Keyword key={keyword} isActive={isActive} onToggle={onToggleKeyword}>
            {keyword}
          </Keyword>
        );
      })}
    </S.KeywordList>
  );
};

export default KeywordList;
