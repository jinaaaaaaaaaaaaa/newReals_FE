import * as S from './Item.Style';
import CoinIcon from '../../assets/icons/CoinIcon.svg';

interface ItemProps {
  img: string;
  name: string;
  price: string;
}

const Item = ({ img, name, price }: ItemProps) => {
  return (
    <>
      <S.ItemBox>
        <S.Img src={img} />
        <S.Name>{name}</S.Name>
        <S.Price>
          <img src={CoinIcon} />
          {price}P
        </S.Price>
      </S.ItemBox>
    </>
  );
};

export default Item;
