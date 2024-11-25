import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../../styles';

export const Container = styled.div`
  ${FontStyles.XS_Medium}
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.375rem;
  border-radius: 0.5rem;
  padding: 0.375rem 0.5rem;
  background-color: ${Colors.Main5};
  color: ${Colors.Main50};
`;

export const Grade = styled.div`
  display: flex;
  padding: 0.125rem 0.5rem;
  border-radius: 6.25rem;
  background-color: ${Colors.Main0};
`;
