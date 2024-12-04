import * as S from './PageNation.Style';
import LeftArrowIcon from '../../../assets/icons/LeftArrowIcon.svg';
import RigthArrowIcon from '../../../assets/icons/RightArrowIcon.svg';

interface PageNationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
/**
 *
 * @param totalPages - 전체 페이지의 수
 * @returns
 */
const PageNation = ({ totalPages, currentPage, onPageChange }: PageNationProps) => {
  const maxVisiblePages = 12;

  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  return (
    <S.PageNation>
      <S.Arrow
        src={LeftArrowIcon}
        alt="이전 버튼"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
      />

      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <S.PageNumber
          key={startPage + i}
          $isActive={currentPage === startPage + i}
          onClick={() => onPageChange(startPage + i)}
        >
          {startPage + i}
        </S.PageNumber>
      ))}

      <S.Arrow
        src={RigthArrowIcon}
        alt="다음 버튼"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
      />
    </S.PageNation>
  );
};

export default PageNation;
