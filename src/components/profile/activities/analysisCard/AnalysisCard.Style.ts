import styled from 'styled-components';
import { Colors, FontStyles } from '../../../../styles';

export const Container = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  border-radius: 1rem;
  background-color: ${Colors.Main5};
`;

export const Title = styled.span`
  ${FontStyles.MD2_Bold}
  color: ${Colors.Grayscale80};
`;

export const Description = styled.p`
  ${FontStyles.XS_Medium}
  color: ${Colors.Grayscale40};
`;

export const Analysis = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.75rem;
  background-color: ${Colors.Main0};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-shrink: 0;
`;

export const Categories = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const GradeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  height: 100%;
  background-color: ${Colors.Main0};
  border-radius: 0.75rem;
`;

export const NoText = styled.p`
  ${FontStyles.SM_Medium}
  color : ${Colors.Grayscale60};
  text-align: center;
`;

export const Button = styled.button`
  width: fit-content;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${Colors.Grayscale5};
  color: ${Colors.Grayscale50};
  ${FontStyles.SM_SemiBold}
  cursor: pointer;
`;
