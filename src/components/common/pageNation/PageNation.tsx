import { useState } from 'react';
import * as S from './PageNation.Style';
import LeftArrowIcon from '../../../assets/icons/LeftArrowIcon.svg';
import RigthArrowIcon from '../../../assets/icons/RightArrowIcon.svg';

interface PageNationProps {
  totalPages: number;
}
/**
 *
 * @param totalPages - 전체 페이지의 수
 * @returns
 */
const PageNation = ({ totalPages }: PageNationProps) => {
  const [pageIndex, setPageIndex] = useState(1);
  const maxVisiblePages = 12;

  const handlePageClick = (page: number) => {
    setPageIndex(page);
  };

  const startPage = Math.max(1, pageIndex - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  return (
    <S.PageNation>
      <img
        src={LeftArrowIcon}
        alt="이전 버튼"
        onClick={() => handlePageClick(Math.max(pageIndex - 1, 1))}
      />

      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <S.PageNumber
          key={startPage + i}
          $isActive={pageIndex === startPage + i}
          onClick={() => handlePageClick(startPage + i)}
        >
          {startPage + i}
        </S.PageNumber>
      ))}

      <img
        src={RigthArrowIcon}
        alt="다음 버튼"
        onClick={() => handlePageClick(Math.min(pageIndex + 1, totalPages))}
      />
    </S.PageNation>
  );
};

export default PageNation;
