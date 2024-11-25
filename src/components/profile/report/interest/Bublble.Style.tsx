import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Bubble = styled.div<{ $isSelected: boolean }>`
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3.125rem;
  background-color: ${Colors.Main5};
  border: 1px solid ${({ $isSelected }) => ($isSelected ? Colors.Main50 : Colors.Main5)};
`;

export const Text = styled.div`
  ${FontStyles.XS_Medium}
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.Main50};
`;

export const Percent = styled.span`
  ${FontStyles.SM_SemiBold}
`;
