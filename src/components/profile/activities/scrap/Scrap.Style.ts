import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const ScrapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`;

export const Text = styled.span`
  ${FontStyles.LG_Bold}
  color : ${Colors.Grayscale90};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
`;

export const CardList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem 1.25rem;
`;
