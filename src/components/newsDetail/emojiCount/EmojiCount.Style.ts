import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Container = styled.div<{ $isActive: boolean }>`
  ${FontStyles.SM_Medium}
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  background-color: ${Colors.Grayscale5};
  border-radius: 25rem;
  color: ${({ $isActive }) => ($isActive ? Colors.Main50 : Colors.Grayscale70)};
`;
