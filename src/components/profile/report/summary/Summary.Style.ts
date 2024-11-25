import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Cotainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Title = styled.span`
  ${FontStyles.MD2_Bold}
  color : ${Colors.Grayscale90};
`;

export const Summary = styled.div`
  ${FontStyles.SM_Medium}
  width: 100%;
  padding: 1.25rem;
  background-color: ${Colors.Main5};
  color: ${Colors.Main50};
  border-radius: 0.75rem;
`;
