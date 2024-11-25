import styled from 'styled-components';
import XIcon from '../../../../assets/icons/XIcon.svg?react';
import { Colors, FontStyles } from '../../../../styles';

export const Keyword = styled.div`
  ${FontStyles.XS_Medium}
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7.125rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background-color: ${Colors.Grayscale5};
  color: ${Colors.Grayscale70};
`;

export const Icon = styled(XIcon)`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;
