import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Cotainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 50%;
`;

export const Title = styled.span`
  ${FontStyles.MD2_Bold}
  color : ${Colors.Grayscale90};
`;

export const GraphContainer = styled.div`
  ${FontStyles.XS_Medium}
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  background-color: ${Colors.Grayscale5};
  border-radius: 0.75rem;
  color: ${Colors.Grayscale50};
`;

export const Content = styled.div`
  display: flex;
  gap: 0.75rem;
  background-color: ${Colors.Main0};
  border-radius: 0.5rem;
  padding: 0.75rem;
  justify-content: center;
`;
