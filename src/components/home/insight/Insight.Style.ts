import styled from 'styled-components';
import { FontStyles, Colors } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const Text = styled.span`
  ${FontStyles.XL_Bold}
  color: ${Colors.Grayscale90};

  @media (max-width: 767px) {
    ${FontStyles.LG_Bold}
  }
`;

export const Description = styled.p`
  ${FontStyles.MD2_Medium}
  color: ${Colors.Grayscale50};
`;

export const Insight = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem;
  background-color: ${Colors.Main5};
  border-radius: 1rem;
`;
