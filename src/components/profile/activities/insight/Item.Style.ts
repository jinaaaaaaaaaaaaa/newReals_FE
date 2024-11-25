import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1.25rem;
  background-color: ${Colors.Main0};
  border-radius: 0.75rem;
`;

export const Header = styled.header`
  ${FontStyles.MD1_SemiBold}
  display: flex;
  justify-content: space-between;
  color: ${Colors.Grayscale90};
`;

export const goToDetail = styled.div`
  ${FontStyles.MD2_Medium}
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: ${Colors.Grayscale50};
`;

export const Comment = styled.div`
  ${FontStyles.MD2_Medium}
  display: flex;
  gap: 0.5rem;
  color: ${Colors.Grayscale70};
`;
