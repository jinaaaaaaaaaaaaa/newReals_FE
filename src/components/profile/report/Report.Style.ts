import styled from 'styled-components';
import { Colors, FontStyles } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const TextContainer = styled.div`
  ${FontStyles.LG_Bold}
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${Colors.Grayscale90};
`;

export const Description = styled.p`
  ${FontStyles.MD2_Medium}
  color : ${Colors.Grayscale50};
`;

export const Report = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid ${Colors.Grayscale10};
`;

export const Title = styled.span`
  ${FontStyles.MD2_Bold}
  color : ${Colors.Grayscale90};
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const NoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 13rem 2.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: 1rem;
  border: 1px solid ${Colors.Grayscale10};
`;

export const Text = styled.span`
  ${FontStyles.MD2_Medium}
  color: ${Colors.Grayscale60};
  text-align: center;
`;

export const Button = styled.button`
  ${FontStyles.SM_SemiBold}
  width: fit-content;
  border-radius: 0.5rem;
  background-color: ${Colors.Grayscale5};
  padding: 0.5rem 0.75rem;
  border: none;
  color: ${Colors.Grayscale50};
  cursor: pointer;
`;
