import styled from 'styled-components';
import { Colors, FontStyles } from '../../styles';

export const MarketPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.75rem 6.25rem;
  gap: 3rem;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.375rem;
`;

export const Info = styled.p`
  color: ${Colors.Grayscale90};
  ${FontStyles.XL_Bold};
  align-self: stretch;
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Count = styled.span`
  color: ${Colors.Grayscale90};
  ${FontStyles.SM_SemiBold};
`;

export const PageNationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
