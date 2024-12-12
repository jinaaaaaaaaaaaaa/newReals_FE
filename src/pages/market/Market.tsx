import { useState } from 'react';
import Chip from '../../components/common/chip/Chip';
import * as S from './Market.Style';
import ItemList from '../../components/market/ItemList';
import MarketImg1 from '../../assets/images/MarketImg1.png';
import MarketImg2 from '../../assets/images/MarketImg2.png';
import MarketImg3 from '../../assets/images/MarketImg3.png';
import PageNation from '../../components/common/pageNation/PageNation';

const chips = ['구매가능한 상품', '판매량순', '높은 가격순', '낮은 가격순'];

const Items = [
  {
    img: MarketImg1,
    name: '하리보 골든베렌 젤리, 1개',
    price: '11,000',
  },
  {
    img: MarketImg2,
    name: '크리스프 스낵 바베큐맛 50p + 사워크림맛 50p',
    price: '15,000',
  },
  {
    img: MarketImg3,
    name: '스낵24 킹갓성비 좋아요 과자선물세트 22p',
    price: '19,000',
  },
  {
    img: MarketImg1,
    name: '하리보 골든베렌 젤리, 1개',
    price: '11,000',
  },
  {
    img: MarketImg2,
    name: '크리스프 스낵 바베큐맛 50p + 사워크림맛 50p',
    price: '15,000',
  },
  {
    img: MarketImg3,
    name: '스낵24 킹갓성비 좋아요 과자선물세트 22p',
    price: '19,000',
  },
  {
    img: MarketImg1,
    name: '하리보 골든베렌 젤리, 1개',
    price: '11,000',
  },
  {
    img: MarketImg2,
    name: '크리스프 스낵 바베큐맛 50p + 사워크림맛 50p',
    price: '15,000',
  },
  {
    img: MarketImg3,
    name: '스낵24 킹갓성비 좋아요 과자선물세트 22p',
    price: '19,000',
  },
];

const Market = () => {
  const [selectedChip, setSelectedChip] = useState('구매가능한 상품');
  const totalPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <S.MarketPage>
      <S.Text>
        <S.Info>모아둔 포인트로 원하는 상품과 교환해보세요!</S.Info>
        <S.ChipContainer>
          {chips.map((chip) => (
            <Chip
              key={chip}
              isSelected={selectedChip === chip}
              onClick={() => setSelectedChip(chip)}
            >
              {chip}
            </Chip>
          ))}
          <S.Count>{Items.length}개의 상품</S.Count>
        </S.ChipContainer>
      </S.Text>
      <ItemList items={Items} />
      <S.PageNationWrapper>
        <PageNation
          totalPages={totalPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </S.PageNationWrapper>
    </S.MarketPage>
  );
};

export default Market;
