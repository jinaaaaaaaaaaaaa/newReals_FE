import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Container = styled.div`
  display: flex;
  gap: 0.375rem;
  align-items: center;
`;

const typeColor = {
  quiz: Colors.Main10,
  attendance: Colors.Main20,
  insight: Colors.Main40,
};

export const Chip = styled.div<{ $type: 'quiz' | 'attendance' | 'insight' }>`
  ${FontStyles.XS_Medium}
  color: ${Colors.Main0};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.125rem 0.5rem;
  border-radius: 6.25rem;
  background-color: ${({ $type }) => typeColor[$type]};
`;

export const Text = styled.p`
  ${FontStyles.XS_Regular}
  color: ${Colors.Grayscale80};
`;
