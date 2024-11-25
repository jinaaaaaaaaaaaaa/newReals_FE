import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Count = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Chip = styled.div`
  ${FontStyles.XS_Medium}
  width: fit-content;
  padding: 0.125rem 0.5rem;
  border-radius: 6.25rem;
  background-color: ${Colors.Main0};
  color: ${Colors.Grayscale50};
`;

export const Text = styled.p`
  ${FontStyles.XS_Regular}
  color: ${Colors.Grayscale80};
`;
