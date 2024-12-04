import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Chip = styled.div<{ $isSelected: boolean; $size?: 'small' | 'large' }>`
  ${({ $size }) => ($size === 'small' ? FontStyles.XS_Medium : FontStyles.SM_SemiBold)}
  width: fit-content;
  padding: ${({ $size }) => ($size === 'small' ? '0.25rem 0.75rem' : '0.5rem 1rem')};
  border-radius: 25rem;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? Colors.Main50 : 'none')};
  background-color: ${({ $isSelected }) => ($isSelected ? Colors.Main5 : Colors.Grayscale5)};
  color: ${({ $isSelected }) => ($isSelected ? Colors.Main50 : Colors.Grayscale50)};
  cursor: pointer;
`;
