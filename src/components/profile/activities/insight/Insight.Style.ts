import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Text = styled.span`
  ${FontStyles.LG_Bold}
  color : ${Colors.Grayscale90};
`;

export const Insight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1rem;
  background-color: ${Colors.Grayscale5};
  border-radius: 1rem;
  width: 100%;
  max-height: 23.8125rem;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
