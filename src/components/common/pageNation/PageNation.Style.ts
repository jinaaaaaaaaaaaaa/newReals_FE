import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const PageNation = styled.div`
  ${FontStyles.SM_SemiBold}
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 1rem;
`;

export const PageNumber = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 25rem;
  background-color: ${({ $isActive }) => ($isActive ? Colors.Main50 : Colors.Main0)};
  color: ${({ $isActive }) => ($isActive ? Colors.Main0 : Colors.Grayscale90)};
  cursor: pointer;
`;

export const Arrow = styled.img`
  cursor: pointer;
`;
