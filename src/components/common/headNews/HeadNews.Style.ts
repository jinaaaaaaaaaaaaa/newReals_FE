import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const HeadNews = styled.div<{ $imageUrl: string | null }>`
  ${FontStyles.LG_Bold}
  width: 100%;
  height: 24rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) -8.68%, rgba(0, 0, 0, 0.8) 91.11%),
    ${(props) => `url(${props.$imageUrl})`};
  background-size: cover;
  background-position: center;
  padding: 6.875rem 0rem 3.125rem 8.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: ${Colors.Main0};

  @media (max-width: 767px) {
    height: 32.5rem;
    padding: 10rem 1.5rem 0rem;
    gap: 2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Head = styled.div`
  display: flex;
  gap: 1.25rem;

  @media (max-width: 767px) {
    gap: 1rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Title = styled.span`
  ${FontStyles.XXL_Bold}

  @media (max-width: 767px) {
    ${FontStyles.XL_Bold}
  }
`;

export const Quiz = styled.div`
  ${FontStyles.MD2_SemiBold}
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

export const Navigation = styled.div`
  ${FontStyles.MD1_Regular}
  display: flex;
  align-items: center;
  gap: 1rem;
`;
