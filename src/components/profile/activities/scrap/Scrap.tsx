import { useNavigate } from 'react-router-dom';
import Card from '../../../common/card/Card';
import PageNation from '../../../common/pageNation/PageNation';
import * as S from './Scrap.Style';
import { useEffect, useState } from 'react';
import { deleteScrap, getScrap } from '../../../../api/Profile';
import { ListProps } from '../../../../types/newsType';

interface ScrapProps {
  nickname: string;
}

const Scrap = ({ nickname }: ScrapProps) => {
  const [scrapList, setScrapList] = useState<ListProps[]>();
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleUnScrap = async (newsId: number) => {
    try {
      await deleteScrap(newsId);
      setScrapList((prevList) => prevList?.filter((item) => item.basenewsId !== newsId));
    } catch (error) {
      console.error('스크랩 해제 실패:', error);
    }
  };

  const handleCardClick = (id: number) => {
    navigate(`/newsDetail/${id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      const scrapData = await getScrap(currentPage);
      if (scrapData) {
        setScrapList(scrapData.basenewsList);
        setTotalPage(scrapData.totalPage);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <S.ScrapContent>
      <S.Text>{nickname}님이 스크랩한 뉴스</S.Text>
      <S.Content>
        <S.CardList>
          {scrapList?.map((card) => (
            <Card
              key={card.basenewsId}
              imageUrl={card.imageUrl}
              isSelected={card.isScrapped}
              category={card.category}
              keyword={card.keyword}
              title={card.title}
              description={card.summary}
              date={card.date}
              onClickBookmark={() => handleUnScrap(card.basenewsId)}
              onClickCard={() => handleCardClick(card.basenewsId)}
            />
          ))}
        </S.CardList>
        <PageNation
          totalPages={totalPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </S.Content>
    </S.ScrapContent>
  );
};

export default Scrap;
