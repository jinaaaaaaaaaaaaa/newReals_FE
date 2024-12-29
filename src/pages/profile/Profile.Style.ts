import styled from 'styled-components';
import { Colors, FontStyles } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding-top: 3.75rem;
  padding-bottom: 5rem;

  @media (max-width: 767px) {
    align-items: flex-start;
    padding: 2rem 1rem 3.75rem;
    border-top: 1px solid ${Colors.Grayscale10};
  }
`;

export const Title = styled.span`
  ${FontStyles.XL_Bold}
  width: 80%;
  color: ${Colors.Grayscale90};

  @media (max-width: 767px) {
    ${FontStyles.LG_Bold}
  }
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  gap: 1.25rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const RightContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 767px) {
    gap: 0.75rem;
  }
`;
