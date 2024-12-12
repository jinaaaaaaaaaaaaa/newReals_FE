import CardList from '../../components/common/cardList/CardList';
import * as S from './Search.Style';
import XIcon from '../../assets/icons/XIcon.svg';
import Tag from '../../components/common/tag/Tag';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearchResults } from '../../api/Search';
import Loading from '../../components/common/Loading/Loding';
import { handleScrap } from '../../utils/scrapUtils';
import { ListProps } from '../../types/newsType';
import PageNation from '../../components/common/pageNation/PageNation';

const Search = () => {
  const [searchList, setSearchList] = useState<ListProps[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchWord = location.state?.input; // `state`에서 `input` 값 받기
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalElement, setTotalElement] = useState(0);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCloseButton = () => {
    navigate('/home');
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true);
      if (searchWord) {
        try {
          const results = await getSearchResults(searchWord, currentPage);
          setSearchList(results.basenewsList);
          setTotalPage(results.totalPage);
          setTotalElement(results.totalElement);
        } catch (error) {
          console.error('검색 호출 오류:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSearchList([]);
      }
    };

    fetchSearchResults();
  }, [searchWord, currentPage]);

  return (
    <S.Container>
      <S.HeadPart>
        <S.Title>
          <S.Keyword>'{searchWord}'</S.Keyword> 에 대한 검색 결과예요.
          <Tag color="gray_thinking" size="large">
            {totalElement}개
          </Tag>
        </S.Title>
        <S.Close onClick={handleCloseButton}>
          닫기
          <S.CloseImg src={XIcon} alt="닫기" />
        </S.Close>
      </S.HeadPart>
      {isLoading && <Loading message="검색결과를 불러오는 중입니다" />}
      {!isLoading && totalElement === 0 ? (
        <S.EmptyMessage>검색 결과가 없습니다.</S.EmptyMessage>
      ) : (
        <CardList list={searchList} type="home" onScrap={(id) => handleScrap(id, setSearchList)} />
      )}
      <PageNation
        totalPages={totalPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </S.Container>
  );
};

export default Search;
