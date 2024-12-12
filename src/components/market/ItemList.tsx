import Item from './Item';
import * as S from './ItemList.Style';

interface ItemListProps {
  items: {
    img: string;
    name: string;
    price: string;
  }[];
}

const ItemList = ({ items }: ItemListProps) => {
  return (
    <S.ItemListBox>
      {items.map((item, index) => (
        <Item key={index} img={item.img} name={item.name} price={item.price} />
      ))}
    </S.ItemListBox>
  );
};

export default ItemList;
