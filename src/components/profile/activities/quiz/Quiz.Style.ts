import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Container = styled.div`
  width: 22.375rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  border-radius: 1rem;
  background-color: ${Colors.Grayscale5};

  @media (min-width: 768px) {
    max-width: 15.9375rem;
  }
`;

export const TextContianer = styled.div`
  ${FontStyles.MD2_Bold}
  display: flex;
  flex-direction: column;
  color: ${Colors.Grayscale80};
`;

export const SubText = styled.p`
  ${FontStyles.XS_Medium}
  color : ${Colors.Grayscale40};
`;

export const Quiz = styled.div`
  ${FontStyles.XS_Regular}
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.75rem;
  color: ${Colors.Grayscale30};
  background-color: ${Colors.Main0};

  @media (min-width: 768px) {
    padding: 1.25rem 1rem;
    font-size: 0.625rem;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 767px) {
    gap: 0.5rem;
  }
`;

export const Icon = styled.img`
  width: 3.25rem;
  height: 3.25rem;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const Unanswered = styled.div`
  ${FontStyles.SM_Bold}
  width: 3.25rem;
  height: 3.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.625rem;
  background-color: ${Colors.Grayscale10};
  color: ${Colors.Grayscale30};
  cursor: pointer;

  @media (max-width: 767px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const Number = styled.span`
  color: ${Colors.Main0};
`;
