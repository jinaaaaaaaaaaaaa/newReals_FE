import Tag from '../../common/tag/Tag';
import * as S from './Item.Style';
import RightArrowIcon from '../../../assets/icons/RightArrowIcon.svg?react';
import { useNavigate } from 'react-router-dom';

interface ItemProps {
  category: string;
  title: string;
  newsId: number;
}

/**
 *
 * @param category - 카테고리
 * @param title - 인사이트 내용
 * @param newsId - 해당 인사이트의 뉴스 아이디
 * @returns
 */
const Item = ({ category, title, newsId }: ItemProps) => {
  const navigate = useNavigate();

  const goToNews = () => {
    navigate(`newsDetail/${newsId}`);
  };

  return (
    <S.Item>
      <S.TitleContainer>
        <Tag color="purple">{category}</Tag>"{title}"에 대해 어떻게 생각하시나요?
      </S.TitleContainer>
      <S.GoToNews onClick={goToNews}>
        뉴스 보러 가기
        <RightArrowIcon />
      </S.GoToNews>
    </S.Item>
  );
};

export default Item;
