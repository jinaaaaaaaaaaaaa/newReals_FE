import { CATEGORIES } from '../../../constants/Category';
import * as S from './TabBar.Style';

const CATEGORY = Object.keys(CATEGORIES);
const SOCIETY = Object.keys(CATEGORIES['사회']);
const POLITICS = Object.keys(CATEGORIES['정치']);
const ECONOMY = Object.keys(CATEGORIES['경제']);
const ITEMS = {
  CATEGORY,
  SOCIETY,
  POLITICS,
  ECONOMY,
};

interface TabBarProps {
  type: 'CATEGORY' | 'SOCIETY' | 'POLITICS' | 'ECONOMY';
  selectedItem: string;
  onClick: (selectedItem: string) => void;
}

/**
 *
 * @param type - TabBar의 타입 전달('CATEGORY' | 'SOCIETY' | 'POLITICS' | 'ECONOMY')
 * @param selectedItem - TabBar에서 선택된 값
 * @param onClick - 각각의 TabBar를 클릭 할 시 수행할 함수
 * @returns
 */
const TabBar = ({ type, selectedItem, onClick }: TabBarProps) => {
  const items = ITEMS[type];

  return (
    <S.TabBar>
      {items.map((item, index) => (
        <S.TabItem key={index} onClick={() => onClick(item)} $isSelected={selectedItem === item}>
          {item}
        </S.TabItem>
      ))}
    </S.TabBar>
  );
};

export default TabBar;
