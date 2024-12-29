import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  background-color: ${Colors.Main0};
  border-radius: 0.75rem;

  @media (max-width: 767px) {
    position: relative;
  }
`;

export const TitleContainer = styled.div`
  ${FontStyles.MD2_SemiBold}
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: ${Colors.Grayscale70};

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
  }
`;

export const GoToNews = styled.div`
  ${FontStyles.MD2_Medium}
  display: flex;
  gap: 0.0375rem;
  align-items: center;
  color: ${Colors.Grayscale50};
  cursor: pointer;

  @media (max-width: 767px) {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
  }
`;
