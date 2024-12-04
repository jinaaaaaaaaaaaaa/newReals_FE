import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Container = styled.div`
  width: 100%;
  max-width: 15.9375rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  border-radius: 1rem;
  background-color: ${Colors.Grayscale5};
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
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const Icon = styled.img`
  width: 3.25rem;
  height: 3.25rem;
  cursor: pointer;
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
`;

export const Number = styled.span`
  color: ${Colors.Main0};
`;
