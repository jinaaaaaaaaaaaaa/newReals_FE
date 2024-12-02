import Modal from '../../common/modal/Modal';
import * as S from './KeywordModal.Style';
import XIcon from '../../../assets/icons/XIcon.svg';
import Button from '../../common/button/Button';
import TabBar from './TabBar';
import { useEffect, useState } from 'react';
import Subcategory from '../../common/subcategory/Subcategory';
import { CATEGORIES } from '../../../constants/Category';
import { putKeywords } from '../../../api/Profile';

interface KeywordModalProps {
  onClose: () => void;
}
const KeywordModal = ({ onClose }: KeywordModalProps) => {
  const [category, setCategory] = useState('사회');
  const [isActives, setIsActives] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);

  const handleClickCategory = (category: string) => {
    setCategory(category);
  };

  const handleKeywordToggle = (keyword: string) => {
    setIsActives((prevIsActives) => {
      const updated = prevIsActives.includes(keyword)
        ? prevIsActives.filter((item) => item !== keyword)
        : [...prevIsActives, keyword];
      return updated;
    });
  };

  const handleSubmit = async () => {
    if (isError) null;
    else {
      const response = await putKeywords(isActives);
      if (response) {
        onClose();
      }
    }
  };

  useEffect(() => {
    setIsError(isActives.length > 5);
  }, [isActives]);

  return (
    <Modal onClose={onClose}>
      <S.Modal>
        <S.Header>
          나의 관심 키워드
          <img src={XIcon} alt="닫기" onClick={onClose} />
        </S.Header>
        <TabBar category={category} onClick={handleClickCategory} />

        <S.Categories>
          <S.HelperTextContainer>
            <S.Icon $isError={isError} />
            <S.HelperText $isError={isError}>키워드는 최대 5개까지만 선택이 가능해요</S.HelperText>
          </S.HelperTextContainer>
          {CATEGORIES[category] &&
            Object.entries(CATEGORIES[category]).map(([subcategory, keywords]) => (
              <Subcategory
                key={subcategory}
                data={{ [subcategory]: keywords }}
                isActives={isActives}
                onToggleKeyword={handleKeywordToggle}
                type="modal"
              />
            ))}
        </S.Categories>
        <S.ButtonContainer>
          <Button buttonStyle="profile" onClick={onClose}>
            취소
          </Button>
          <Button buttonStyle="modal" onClick={handleSubmit}>
            적용
          </Button>
        </S.ButtonContainer>
      </S.Modal>
    </Modal>
  );
};

export default KeywordModal;
