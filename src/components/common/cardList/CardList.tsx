import { useNavigate } from 'react-router-dom';
import Card from '../card/Card';
import * as S from './CardList.Style';
import { ListProps } from '../../../types/newsType';

interface CardListProps {
  list: ListProps[];
  type: 'home' | 'category' | 'subCategory';
  onScrap: (id: number) => void;
}

/**
 *
 * @param list - CardList
 * @param type - 'home' | 'category' | 'subCategory' 뉴스 클릭을 어디에서 했는지!
 * @returns
 */
const CardList = ({ list, type, onScrap }: CardListProps) => {
  const navigate = useNavigate();

  const getStateData = (card: ListProps) => {
    const mapping = {
      home: { keyword: card.keyword },
      category: { category: card.category },
      subCategory: { subCategory: card.subCategory },
    };

    return mapping[type];
  };

  const handleCardClick = (card: ListProps) => {
    const stateData = getStateData(card);
    navigate(`/newsDetail/${card.basenewsId}`, { state: stateData });
  };

  return (
    <S.CardContainer>
      {list.map((card) => (
        <Card
          key={card.basenewsId}
          imageUrl={card.imageUrl}
          isSelected={card.isScrapped}
          category={card.category}
          keyword={card.keyword}
          title={card.title}
          description={card.summary}
          date={card.date}
          onClickBookmark={() => onScrap(card.basenewsId)}
          onClickCard={() => handleCardClick(card)}
        />
      ))}
    </S.CardContainer>
  );
};

export default CardList;
