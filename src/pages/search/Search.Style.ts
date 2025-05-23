import styled from 'styled-components';
import { Colors, FontStyles } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.75rem 8.75rem;
  gap: 2rem;
  @media (max-width: 767px) {
    width: 100%;
    padding: 2rem 1rem;
    border-top: 1px solid ${Colors.Grayscale10};
  }
`;

export const HeadPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.p`
  color: ${Colors.Grayscale90};
  ${FontStyles.XL_Bold};
  display: flex;
  gap: 0.75rem;
  align-items: center;
  @media (max-width: 767px) {
    ${FontStyles.MD1_Bold};
    gap: 0.5rem;
  }
`;

export const Keyword = styled.span`
  color: ${Colors.Main50};
  ${FontStyles.XL_Bold};
  @media (max-width: 767px) {
    ${FontStyles.MD1_Bold};
  }
`;

export const Close = styled.span`
  color: ${Colors.Grayscale90};
  ${FontStyles.SM_SemiBold};
  display: flex;
  align-items: center;
  gap: 0.375rem;
  cursor: pointer;
`;

export const CloseImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export const EmptyMessage = styled.div`
  margin: 3rem 0;
  color: ${Colors.Grayscale50};
  text-align: center;
  font-size: 1rem;
`;
