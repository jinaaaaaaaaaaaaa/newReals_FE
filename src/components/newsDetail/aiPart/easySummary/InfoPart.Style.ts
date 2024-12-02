import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Info = styled.div`
  ${FontStyles.XS_Medium}
  color: ${Colors.Grayscale80};
  display: inline-block;
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 0.5rem;
  max-width: 400px;
  border-radius: 0.75rem;
  background-color: ${Colors.Grayscale5};
  box-shadow: 2px 4px 16px 0px rgba(88, 88, 88, 0.2);
`;
