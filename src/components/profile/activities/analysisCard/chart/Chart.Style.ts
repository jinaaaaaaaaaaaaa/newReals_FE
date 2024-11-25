import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../../styles';

export const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CenterText = styled.div`
  ${FontStyles.MD2_SemiBold}
  color: ${Colors.Main60};
`;
