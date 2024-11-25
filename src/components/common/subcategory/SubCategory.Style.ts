import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

interface StylesProps {
  $type: 'register' | 'modal';
}

export const Container = styled.div<StylesProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ $type }) => ($type === 'modal' ? '0.75rem' : '1.25rem')};
`;

export const SubCategory = styled.div<StylesProps>`
  ${({ $type }) => ($type === 'modal' ? FontStyles.SM_SemiBold : FontStyles.MD2_Bold)}
  display: flex;
  justify-content: space-between;
  color: ${Colors.Grayscale90};
`;

export const Total = styled.div<StylesProps>`
  ${({ $type }) => ($type === 'modal' ? FontStyles.XS_Medium : FontStyles.SM_Medium)}
  display: flex;
  gap: 0.375rem;
  align-items: center;
  color: ${Colors.Grayscale50};
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;
