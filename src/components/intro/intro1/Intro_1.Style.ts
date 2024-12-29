import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Img = styled.img`
  height: auto;
  width: 46.25rem;
  margin-top: 3rem;
  object-fit: cover;
`;

export const FirstIntro = styled.div`
  padding: 6.25rem;
  height: 20rem;
  align-self: stretch;
  background-color: ${Colors.Main5};
  gap: 6rem;
  justify-content: center;
  align-items: center; /* 세로 정렬 */
  display: flex;
  width: 100%;
  overflow: hidden;
  @media (max-width: 767px) {
    height: 11.5rem;
    justify-content: left;

    /* 모바일 화면에서 이미지 숨기기 */
    ${Img} {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* 모바일에서 텍스트가 더 커지도록 조정 */
    flex-direction: row;
    padding: 0 2rem;
    gap: 2rem;
  }
`;

export const Purple = styled.span`
  color: ${Colors.Main50};
`;

export const Slogan = styled.p`
  color: ${Colors.Grayscale90};
  font-family: 'Syncopate';
  font-size: 2.25rem;
  line-height: 120%;
  @media (max-width: 767px) {
    font-size: 0.875rem;
  }
`;
export const Info = styled.p`
  color: ${Colors.Grayscale70};
  ${FontStyles.MD1_Medium};
  margin-top: 0.5rem;
  @media (max-width: 767px) {
    ${FontStyles.XS_Medium};
  }
`;
