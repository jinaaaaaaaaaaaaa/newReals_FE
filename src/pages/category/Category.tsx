import { useEffect, useState } from 'react';
import HeadNews from '../../components/common/headNews/HeadNews';
import TabBar from '../../components/common/tabBar/TabBar';
import { useLocation } from 'react-router-dom';
import CardList from '../../components/common/cardList/CardList';
import PageNation from '../../components/common/pageNation/PageNation';
import * as S from './Category.Style';
import { getCategoryNews, getSubCategoryNews } from '../../api/Category';
import { handleScrap } from '../../utils/scrapUtils';
import { DailyNewsProps, ListProps } from '../../types/newsType';

const categoryMap: Record<'society' | 'politics' | 'economy' | 'category', string> = {
  society: '사회',
  politics: '정치',
  economy: '경제',
  category: '기타',
};

const Category = () => {
  const [dailyNews, setDailyNews] = useState<DailyNewsProps | null>(null);
  const [selectSubCategory, setSelectSubCategory] = useState('');
  const [categoryNews, setCategoryNews] = useState<ListProps[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { pathname } = useLocation();

  const category = pathname.split('/')[2] as 'category' | 'society' | 'politics' | 'economy';

  const handleCategory = (category: string) => {
    setSelectSubCategory(selectSubCategory === category ? '' : category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setSelectSubCategory('');
    setCurrentPage(1);
    const fetchCategoryNews = async () => {
      const data = await getCategoryNews(categoryMap[category], 1);
      if (data) {
        setDailyNews(data.dailynews);
        setCategoryNews(data.basenewsList);
        setTotalPage(data.totalPage);
      }
    };
    fetchCategoryNews();
  }, [category]);

  // 페이지 변경 시
  useEffect(() => {
    if (!selectSubCategory) {
      const fetchCategoryNews = async () => {
        const data = await getCategoryNews(categoryMap[category], currentPage);
        if (data) {
          setCategoryNews(data.basenewsList);
          setTotalPage(data.totalPage);
        }
      };
      fetchCategoryNews();
    }
  }, [currentPage, selectSubCategory]);

  // 소카테고리 변경 시
  useEffect(() => {
    if (selectSubCategory) {
      const fetchSubCategoryNews = async () => {
        const data = await getSubCategoryNews(
          categoryMap[category],
          selectSubCategory,
          currentPage,
        );
        if (data) {
          setCategoryNews(data.basenewsList);
          setTotalPage(data.totalPage);
        }
      };
      fetchSubCategoryNews();
    }
  }, [selectSubCategory, currentPage]);

  return (
    <div>
      {dailyNews ? (
        <HeadNews
          imagePath={dailyNews.imagePath}
          id={dailyNews.dailynewsId}
          category={dailyNews.category}
          subcategory={dailyNews.subCategory}
          keyword={dailyNews.keyword}
          title={dailyNews.title}
          quiz={dailyNews.quizQuestion}
        />
      ) : (
        <div>Loading...</div>
      )}

      <S.Container>
        <S.TextContainer>
          <S.Title>{category} 뉴스 돌아보기</S.Title>
          <S.Description>카테고리 선택으로 뉴스를 검색해 보세요.</S.Description>
        </S.TextContainer>
        <TabBar type={category} selectedItem={selectSubCategory} onClick={handleCategory} />
        <CardList
          list={categoryNews}
          type={selectSubCategory !== '' ? 'subCategory' : 'category'}
          onScrap={(id) => handleScrap(id, setCategoryNews)}
        />
        <PageNation
          totalPages={totalPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </S.Container>
    </div>
  );
};

export default Category;
