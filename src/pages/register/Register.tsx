import * as S from './Register.Style';
import Text from '../../components/register/text/Text';
import TabBar from '../../components/common/tabBar/TabBar';
import { useState } from 'react';
import Subcategory from '../../components/common/subcategory/Subcategory';
import { CATEGORIES } from '../../constants/Category';
import SelectBox from '../../components/register/selectBox/SelectBox';

const Register = () => {
  const [category, setCategory] = useState('사회');
  const [isActives, setIsActives] = useState<string[]>([]);
  const nickname = localStorage.getItem('nickname') || '';

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  const handleKeywordToggle = (keyword: string) => {
    setIsActives((prevIsActives) =>
      prevIsActives.includes(keyword)
        ? prevIsActives.filter((item) => item !== keyword)
        : [...prevIsActives, keyword],
    );
  };

  return (
    <S.Content>
      <Text nickname={nickname} />
      <TabBar type="category" selectedItem={category} onClick={handleCategory} />
      <S.Categories>
        {CATEGORIES[category] &&
          Object.entries(CATEGORIES[category]).map(([subcategory, keywords]) => (
            <Subcategory
              key={subcategory}
              data={{ [subcategory]: keywords }}
              isActives={isActives}
              onToggleKeyword={handleKeywordToggle}
            />
          ))}
      </S.Categories>
      <SelectBox isActives={isActives} setIsActives={setIsActives} />
    </S.Content>
  );
};

export default Register;
