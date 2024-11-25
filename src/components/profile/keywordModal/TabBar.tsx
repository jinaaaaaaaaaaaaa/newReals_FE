import { CATEGORIES } from '../../../constants/Category';
import * as S from './TabBar.Style';

const CATEGORY = Object.keys(CATEGORIES);

interface TabBarProps {
  category: string;
  onClick: (category: string) => void;
}

/**
 *
 * @param category : 현재 탭바에서 선택된 카테고리
 * @param onClick : 탭바에서 카테고리 클릭할 시 수행할 함수
 * @returns
 */
const TabBar = ({ category, onClick }: TabBarProps) => {
  return (
    <S.TabBar>
      {CATEGORY.map((item, index) => (
        <S.Item key={index} $isSelected={category === item} onClick={() => onClick(item)}>
          {item}
        </S.Item>
      ))}
    </S.TabBar>
  );
};

export default TabBar;
