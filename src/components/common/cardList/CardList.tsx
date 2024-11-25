import { useNavigate } from 'react-router-dom';
import Card from '../card/Card';
import * as S from './CardList.Style';

interface ListProps {
  id: number;
  imageUrl?: string;
  isSelected: boolean;
  category: string;
  keyword: string;
  title: string;
  description: string;
  date: string;
}

interface CardListProps {
  list: ListProps[];
}

/**
 *
 * @param list - CardList
 * @returns
 */
const CardList = ({ list }: CardListProps) => {
  const navigate = useNavigate();
  const handleBookmark = () => {
    console.log('북마크 기능 구현 필요');
  };

  const handleCardClick = (id: number) => {
    navigate(`/newsDetail/${id}`);
  };

  return (
    <S.CardContainer>
      {list.map((card) => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          isSelected={card.isSelected}
          category={card.category}
          keyword={card.keyword}
          title={card.title}
          description={card.description}
          date={card.date}
          onClickBookmark={handleBookmark}
          onClickCard={() => handleCardClick(card.id)}
        />
      ))}
    </S.CardContainer>
  );
};

export default CardList;
