import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Chip = styled.div`
  ${FontStyles.XS_Medium}
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${Colors.Main10};
  color: ${Colors.Main50};
`;
