import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Keyword = styled.div<{ $isActive: boolean }>`
  ${FontStyles.SM_SemiBold};
  width: 100%;
  padding: 0.5rem 0.75rem;
  text-align: center;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  background-color: ${({ $isActive }) => ($isActive ? Colors.Main40 : Colors.Grayscale5)};
  color: ${({ $isActive }) => ($isActive ? Colors.Main0 : Colors.Grayscale50)};
  cursor: pointer;

  &:hover {
    background: ${Colors.Main50};
    color: ${Colors.Main0};
  }
`;
