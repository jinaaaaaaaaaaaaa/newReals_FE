import * as S from './Tag.Style';

interface TagProps {
  children: React.ReactNode;
  color: 'gray' | 'purple' | 'red' | 'gray_thinking';
  size?: 'small' | 'large';
}

/**
 *
 * @param children - Tag 안의 글씨
 * @param color - Tag의 색깔(gray | purple)
 * @param size - (optional) Tag의 크기(small | large), default는 small
 * @returns
 */
const Tag = ({ children, color, size = 'small' }: TagProps) => {
  return (
    <S.Tag $color={color} $size={size}>
      {children}
    </S.Tag>
  );
};

export default Tag;
