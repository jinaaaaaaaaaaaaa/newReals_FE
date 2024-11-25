import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const TabBar = styled.div`
  display: flex;
  width: 100%;
`;

export const TabItem = styled.div<{ $isSelected: boolean }>`
  ${FontStyles.SM_SemiBold}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem auto;
  width: 100%;
  height: 2.8125rem;
  border-right: 1px solid ${Colors.Grayscale10};
  background-color: ${({ $isSelected }) => ($isSelected ? Colors.Main40 : Colors.Grayscale5)};
  color: ${({ $isSelected }) => ($isSelected ? Colors.Main0 : Colors.Grayscale50)};
  cursor: pointer;

  &:first-child {
    border-radius: 0.75rem 0rem 0rem 0.75rem;
  }

  &:last-child {
    border-radius: 0rem 0.75rem 0.75rem 0rem;
  }
`;
