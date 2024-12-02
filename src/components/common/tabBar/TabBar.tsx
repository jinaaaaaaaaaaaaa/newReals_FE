import { CATEGORIES } from '../../../constants/Category';
import * as S from './TabBar.Style';

const category = Object.keys(CATEGORIES);
const society = Object.keys(CATEGORIES['사회']);
const politics = Object.keys(CATEGORIES['정치']);
const economy = Object.keys(CATEGORIES['경제']);
const ITEMS = {
  category,
  society,
  politics,
  economy,
};

interface TabBarProps {
  type: 'category' | 'society' | 'politics' | 'economy';
  selectedItem: string;
  onClick: (selectedItem: string) => void;
}

/**
 *
 * @param type - TabBar의 타입 전달('category' | 'society' | 'politics' | 'economy')
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
