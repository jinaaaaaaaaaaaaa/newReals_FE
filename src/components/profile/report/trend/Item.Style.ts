import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem;
  border-radius: 0.5rem;
  background-color: ${Colors.Main0};

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Text = styled.p`
  ${FontStyles.XS_Medium}
  color : ${Colors.Grayscale80};
`;
