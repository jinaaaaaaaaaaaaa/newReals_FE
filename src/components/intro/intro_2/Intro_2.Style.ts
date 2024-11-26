import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const SecondIntro = styled.div`
  color: ${Colors.Grayscale90};
  ${FontStyles.XXL_SemiBold};
  display: flex;
  padding: 6.25rem 13.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
`;

export const Logo = styled.span`
  color: ${Colors.Black};
  text-align: center;
  font-family: Syncopate;
  font-size: 1.875rem;
  line-height: 140%;
`;

export const Tag = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 0.75rem;
`;
