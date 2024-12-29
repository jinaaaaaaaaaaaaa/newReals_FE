import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Title = styled.span`
  ${FontStyles.MD2_Bold}
  color : ${Colors.Grayscale90};
`;

export const Description = styled.p`
  ${FontStyles.XS_Medium}
  color: ${Colors.Grayscale50};
`;

export const Analysis = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Bubbles = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.75rem;
  gap: 0.5rem;
  background-color: ${Colors.Grayscale5};
  border-radius: 0.75rem;
`;

export const Text = styled.p`
  ${FontStyles.XS_Medium}
  color : ${Colors.Grayscale90};
`;

export const Chips = styled.div`
  display: flex;
  gap: 1rem;
`;
