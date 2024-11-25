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

export const Trend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  background-color: ${Colors.Grayscale5};
  border-radius: 0.75rem;
`;

export const Description = styled.div`
  ${FontStyles.SM_Regular}
  color: ${Colors.Grayscale90};
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
