import styled from 'styled-components';
import { Colors, FontStyles } from '../../styles';

export const MarketPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.75rem 6.25rem;
  gap: 3rem;
  @media (max-width: 767px) {
    border-top: 1px solid ${Colors.Grayscale10};
    padding: 2rem 1rem;
    gap: 2rem;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.375rem;
  @media (max-width: 767px) {
    gap: 1rem;
  }
`;

export const Info = styled.p`
  color: ${Colors.Grayscale90};
  ${FontStyles.XL_Bold};
  align-self: stretch;
  @media (max-width: 767px) {
    ${FontStyles.LG_Bold};
  }
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  @media (max-width: 767px) {
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, and Edge */
    }
  }
`;

export const Count = styled.span`
  color: ${Colors.Grayscale90};
  ${FontStyles.SM_SemiBold};
`;

export const PageNationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
