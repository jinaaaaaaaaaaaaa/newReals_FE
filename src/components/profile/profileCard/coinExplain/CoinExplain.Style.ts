import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Explain = styled.div`
  position: absolute;
  top: 1.5rem;
  right: -1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 18.75rem;
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: ${Colors.Main0};
  box-shadow: 2px 4px 16px 0px rgba(88, 88, 88, 0.2);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
`;

export const Text = styled.div`
  ${FontStyles.XS_Medium}
  display: flex;
  gap: 0.25rem;
  align-items: center;
  color: ${Colors.Grayscale80};
`;
