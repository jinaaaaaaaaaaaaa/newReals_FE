import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const TabBar = styled.div`
  display: flex;
  width: 100%;
`;

export const Item = styled.div<{ $isSelected: boolean }>`
  ${FontStyles.SM_Medium}
  width: 8.75rem;
  padding: 0.75rem 0rem;
  text-align: center;
  border-bottom: 1px solid
    ${({ $isSelected }) => ($isSelected ? Colors.Main50 : Colors.Grayscale50)};
  color: ${({ $isSelected }) => ($isSelected ? Colors.Main50 : Colors.Grayscale50)};
`;
