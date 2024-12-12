import styled from 'styled-components';
import { Colors, FontStyles } from '../../styles';

export const ItemBox = styled.div`
  gap: 0.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 21.6875rem;
  height: 17.375rem;
  gap: 1rem;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  height: 11.25rem;
  border-radius: 1rem;
  margin-bottom: 0.75rem;
`;

export const Name = styled.p`
  color: ${Colors.Grayscale70};
  ${FontStyles.MD2_Medium};
`;

export const Price = styled.p`
  color: ${Colors.Grayscale90};
  ${FontStyles.MD2_Bold};
  align-items: center;
  gap: 0.5rem;
  display: flex;
`;
