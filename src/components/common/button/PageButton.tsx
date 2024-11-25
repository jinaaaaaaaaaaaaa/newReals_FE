import * as S from './PageButton.Style';
import LeftArrowIcon from '../../../assets/icons/LeftArrowIcon.svg?react';
import RightArrowIcon from '../../../assets/icons/RightArrowIcon.svg?react';

interface PageButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonStyle: 'left' | 'right';
}

/**
 *
 * @param children - PageButton에 들어갈 글씨
 * @param buttonStyle - left는 이전 뉴스, right는 다음 뉴스 버튼
 * @param props - 기본 버튼 속성으로, `type`, `onClick`, `disabled` 등 HTML 버튼의 기본 속성을 사용 가능
 * @returns
 */
const PageButton = ({ children, buttonStyle, ...props }: PageButtonProps) => {
  return (
    <S.PageButton $buttonStyle={buttonStyle} {...props}>
      {buttonStyle === 'left' && <LeftArrowIcon />}
      {children}
      {buttonStyle === 'right' && <RightArrowIcon />}
    </S.PageButton>
  );
};

export default PageButton;
