import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const ScrapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

export const ScrapHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.span`
  ${FontStyles.LG_Bold}
  color : ${Colors.Grayscale90};
`;

export const CardList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem 1.25rem;
`;
