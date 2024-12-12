import { useEffect, useState } from 'react';
import Chip from '../../common/chip/Chip';
import * as S from './LatestNews.Style';
import PageNation from '../../common/pageNation/PageNation';
import CardList from '../../common/cardList/CardList';
import { getKeywordNews } from '../../../api/Main';
import { handleScrap } from '../../../utils/scrapUtils';
import { ListProps } from '../../../types/newsType';

const LatestNews = () => {
  const [keywordsList, setKeywordsList] = useState(['']);
  const [baseNewsList, setBaseNewsList] = useState<ListProps[]>([]);
  const [currentKeyword, setCurrentKeyword] = useState<number | null>(null);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleClickKeyword = (keyword: number) => {
    if (currentKeyword === keyword) {
      setCurrentKeyword(null);
    } else {
      setCurrentKeyword(keyword);
    }
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await getKeywordNews(currentKeyword, currentPage);
      if (newsData) {
        setKeywordsList(newsData.userKeywords);
        setBaseNewsList(newsData.baseNewsList);
        setTotalPage(newsData.totalPage);
      }
    };
    fetchData();
  }, [currentKeyword, currentPage]);

  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>최신 뉴스</S.Title>
        <S.DescrtionContainer>
          <S.Description>주요 키워드로 나에게 맞는 뉴스를 찾아보세요</S.Description>
          <S.Keywords>
            {keywordsList.map((keyword, index) => (
              <Chip
                key={index}
                isSelected={currentKeyword === index}
                onClick={() => handleClickKeyword(index)}
              >
                {keyword}
              </Chip>
            ))}
          </S.Keywords>
        </S.DescrtionContainer>
      </S.TextContainer>
      <CardList
        list={baseNewsList}
        type="home"
        onScrap={(id) => handleScrap(id, setBaseNewsList)}
      />
      <PageNation
        totalPages={totalPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </S.Container>
  );
};

export default LatestNews;
