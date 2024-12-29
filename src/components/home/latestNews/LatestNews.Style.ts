import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Container = styled.div`
  max-width: 91rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 767px) {
    min-width: 22.375rem;
    max-width: 46.25rem;
    width: 100%;
    gap: 2rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.375rem;

  @media (max-width: 767px) {
    gap: 0.375rem;
  }
`;

export const Title = styled.span`
  ${FontStyles.XL_Bold};
  color: ${Colors.Grayscale90};

  @media (max-width: 767px) {
    ${FontStyles.LG_Bold}
  }
`;

export const DescrtionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const Description = styled.p`
  ${FontStyles.MD2_Medium}
  color: ${Colors.Grayscale50};
`;

export const Keywords = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 767px) {
    gap: 0.75rem;
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none; /* IE에서 스크롤바 숨김 */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Edge에서 스크롤바 숨기기 */
    }
  }
`;
