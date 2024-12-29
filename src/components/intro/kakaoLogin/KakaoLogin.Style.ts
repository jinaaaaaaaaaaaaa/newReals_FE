import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const ImgPart = styled.img`
  margin-left: auto;
  max-height: 100%;
  object-fit: contain;
`;

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 16px;
  padding-left: 6.25rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
  height: 13.5rem;
  background: ${Colors.Main5};
  @media (max-width: 767px) {
    height: 11.5rem;
    justify-content: center;

    /* 모바일 화면에서 이미지 숨기기 */
    ${ImgPart} {
      display: none;
    }

    /* 모바일에서 텍스트가 더 커지도록 조정 */
    flex-direction: row;
    padding: 0 2rem;
    gap: 2rem;
  }
`;

export const StartMent = styled.p`
  color: ${Colors.Grayscale90};
  ${FontStyles.XL_SemiBold};
  @media (max-width: 767px) {
    ${FontStyles.MD2_SemiBold};
    white-space: nowrap;
  }
`;

export const Purple = styled.span`
  color: ${Colors.Main50};
`;

export const KakaoButton = styled.img`
  cursor: pointer;
  margin-top: 1rem;
`;
