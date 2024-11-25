import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Info = styled.div`
  ${FontStyles.XS_Medium}
  color: ${Colors.Grayscale80};
  display: inline-block;
  white-space: nowrap;
  padding: 0.5rem;
  border-radius: 0.75rem;
  background-color: ${Colors.Main0};
  box-shadow: 2px 4px 16px 0px rgba(88, 88, 88, 0.2);
`;
