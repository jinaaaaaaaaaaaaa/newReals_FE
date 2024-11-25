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

export const Content = styled.div`
  ${FontStyles.XS_Medium}
  display: flex;
  flex-direction: column;
  background-color: ${Colors.Grayscale5};
  color: ${Colors.Grayscale50};
  padding: 1.5rem 1.25rem;
  gap: 1rem;
  width: 100%;
  border-radius: 0.75rem;
`;

export const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
  padding: 1rem;
  background-color: ${Colors.Main0};
  border-radius: 0.5rem;
`;
