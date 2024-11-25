import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  background-color: ${Colors.Main0};
  border-radius: 0.75rem;
`;

export const TitleContainer = styled.div`
  ${FontStyles.MD1_SemiBold}
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: ${Colors.Grayscale70};
`;

export const GoToNews = styled.div`
  ${FontStyles.MD2_Medium}
  display: flex;
  gap: 0.0375rem;
  align-items: center;
  color: ${Colors.Grayscale50};
`;
