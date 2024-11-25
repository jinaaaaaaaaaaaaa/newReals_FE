import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const Title = styled.div`
  ${FontStyles.XL_Bold}
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${Colors.Grayscale90};
`;

export const HelperText = styled.p`
  ${FontStyles.MD2_SemiBold};
  color: ${Colors.Main50};
`;

export const Description = styled.p`
  ${FontStyles.MD2_Medium};
  color: ${Colors.Grayscale50};
`;
