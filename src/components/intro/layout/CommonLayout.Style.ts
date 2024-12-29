import styled from 'styled-components';
import { Colors } from '../../../styles';

export const ImgPart = styled.img`
  margin-top: auto;
`;

export const IntroMent = styled.div<{ $isLeft: boolean }>`
  display: flex;
  flex-direction: ${({ $isLeft }) => ($isLeft ? 'row' : 'row-reverse')};
  height: 25rem;
  padding: 0rem 6.25rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background-color: ${({ $isLeft }) => ($isLeft ? Colors.Grayscale5 : Colors.Main0)};
  gap: 6rem;

  /* 모바일에서 이미지 숨기기 */
  @media (max-width: 767px) {
    height: 14rem;
    /* 모바일 화면에서 이미지 숨기기 */
    ${ImgPart} {
      display: none;
    }

    /* 모바일에서 텍스트가 더 커지도록 조정 */
    padding: 0 2rem;
    gap: 2rem;
  }
`;
